import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

type Props = {
  addClassName?: string;
};

export default function Links({ addClassName }: Props) {
  return (
    <div className={`text-base gap-1 sm:gap-3 ${addClassName}`}>
      <a
        className="hover:cursor-pointer"
        href="https://github.com/hamluk"
        target="_blank"
      >
        <FaGithub className="sm:size-5" />
      </a>
      <a
        className="hover:cursor-pointer"
        href="https://www.linkedin.com/in/lukashamm-dev"
        target="_blank"
      >
        <FaLinkedin className="sm:size-5" />
      </a>
      <a className="hover:cursor-pointer" href="mailto:lukas@lukashamm.dev">
        <FaEnvelope className="sm:size-5" />
      </a>
    </div>
  );
}
