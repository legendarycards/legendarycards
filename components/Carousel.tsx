import React, { useState, useEffect, useCallback, MouseEventHandler } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { prefix } from '../utils/prefix.js';

import CardPhoto from "./CardPhoto";

type ThumbProps = {
  selected: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  imgSrc: string;
}

const Thumb: React.FC<ThumbProps> = ({ selected, onClick, imgSrc }: ThumbProps) => (
  <div
    className={`embla__slide embla__slide--thumb ${
      selected ? "is-selected" : ""
    }`}
  >
    <button
      onClick={onClick}
      className="embla__slide__inner embla__slide__inner--thumb"
      type="button"
    >
      <img className="embla__slide__thumbnail" src={imgSrc} alt="A cool cat." />
    </button>
  </div>
);

type Props = {
  group: Array<string>;
  groupPrefix: string;
  groupLink: string;
}

const Carousel: React.FC<Props> = ({ group, groupPrefix, groupLink }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    draggable: false,
    // selectedClass: "",
    dragFree: true
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  // Create rows for the thumbnails.
  const groupRows = new Array<Array<number>>();
  var groupRow = new Array<number>();
  for (var i = 0; i < group.length; i++) {
    if (i > 0 && i%5 == 0) {
      groupRows[groupRows.length] = groupRow;
      groupRow = new Array<number>();
    }
    groupRow[groupRow.length] = i;
  }
  if (groupRow.length > 0) {
    groupRows[groupRows.length] = groupRow;
  }

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={mainViewportRef}>
          <div className="embla__container">
            {group.map((name, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  {/* <img
                    className="embla__slide__img"
                    src={mediaByIndex(index)}
                    alt="A cool cat."
                  /> */}

                  <div className="grid gap-6 grid-cols-2 p-3">
                    <CardPhoto href={groupLink} src={`${groupPrefix}/${name}/normal.jpeg`} subtext="Normal Version" />
                    <CardPhoto href={groupLink} src={`${groupPrefix}/${name}/rare.jpeg`} subtext="Rare Version" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="embla embla--thumb">
        <div className="embla__viewport" ref={thumbViewportRef}>
          {groupRows.map((groupRow, i) => (
            <div className="embla__container embla__container--thumb" key={`group-row-${i}`}>
              {groupRow.map((groupIndex) => (
                <Thumb
                  onClick={() => onThumbClick(groupIndex)}
                  selected={groupIndex === selectedIndex}
                  imgSrc={`${prefix}/${groupPrefix}/${group[groupIndex]}/rare.jpeg`}
                  key={groupIndex}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
