
import Link from 'next/link';

const BackButton: React.FC = () => {

  return (
    <Link href="/" passHref>
      <div className="content align-middle mx-auto">
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointer no-block pt-2 w-10 h-10 mb-4 hover:text-sky-500 hover:scale-110">
            <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
          </svg>
          <div className="pl-2 no-block cursor-pointer">
            Back to Card List
          </div>
        </a>
      </div>
    </Link>
  )
}

export default BackButton;
