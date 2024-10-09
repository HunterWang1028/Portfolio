const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading max-w-[80vw]">
          持續學習 <br />
          讓我在快速變化的科技世界中
          <span className="text-purple">保持前行。</span>
        </h1>
        <p className="text-white-200 md:mt-10  text-center">
          使用新學的技術，讓寫的程式能夠跑起來，是我成就感的來源。
        </p>
      </div>
    </footer>
  );
};

export default Footer;
