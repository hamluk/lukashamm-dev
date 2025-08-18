import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

type Props = {};

export default function Links({}: Props) {
  return (
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
  );
}
