import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} MUTCU — All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
