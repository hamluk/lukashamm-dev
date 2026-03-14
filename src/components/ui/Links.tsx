import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

type Props = {
  addClassName?: string;
};

export default function Links({ addClassName }: Props) {
  return (
    <div className={`${addClassName}`}>
      <a
        className="hover:cursor-pointer"
        href="https://github.com/hamluk"
        target="_blank"
      >
        <FaGithub />
      </a>
      <a
        className="hover:cursor-pointer"
        href="https://www.linkedin.com/in/lukashamm-dev"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a className="hover:cursor-pointer" href="mailto:lukas@lukashamm.dev">
        <FaEnvelope />
      </a>
    </div>
  );
}
