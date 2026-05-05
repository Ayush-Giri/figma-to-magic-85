const Footer = () => {
  return (
    <footer className="px-4 py-6 bg-[#0a0418] border-t border-purple-900/30">
      <h5 className="text-sm font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent tracking-wider mb-4">LUCKY STRIKE</h5>
      <div className="flex gap-4 mb-4 flex-wrap">
        {["Terms of Service", "Privacy Policy", "Fair Play", "Contact Us"].map((link) => (
          <a
            key={link}
            href="#"
            className="text-[10px] text-gray-500 hover:text-gray-300 transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
      <p className="text-[8px] text-gray-600">
        © 2026 LUCKY STRIKE. ALL RIGHTS RESERVED. PLAY RESPONSIBLY.. ALL RIGHTS RESERVED. PLAY RESPONSIBLY.
      </p>
    </footer>
  );
};

export default Footer;
