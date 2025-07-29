import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

type HeaderProps = {
  title: string;
  subtitle?: string;
};

function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="flex justify-between items-center text-olive-green px-7 sm:px-9 h-25 sm:h-45 shadow-md">
      <div className="flex flex-col h-auto sm:gap-1">
        <div className="flex items-center gap-4 sm:gap-10">
          <h1 className="text-2xl sm:text-6xl font-serif ">LH</h1>
          <h1 className="text-2xl sm:text-4xl font-bold text-dark-text">
            {title}
          </h1>
        </div>
        <div>
          <h2 className="text-sm sm:text-lg text-wrap text-dark-text">
            {subtitle}
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="bg-gray-400 w-0.5 h-13 sm:h-21"></div>
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-3">
          <a
            className="hover:cursor-pointer"
            href="https://github.com/hamluk"
            target="_blank"
          >
            <FaGithub className="sm:size-6" />
          </a>
          <a
            className="hover:cursor-pointer"
            href="https://www.linkedin.com/in/lukashamm-dev"
            target="_blank"
          >
            <FaLinkedin className="sm:size-6" />
          </a>
          <a className="hover:cursor-pointer" href="mailto:lukas@lukashamm.dev">
            <FaEnvelope className="sm:size-6" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
