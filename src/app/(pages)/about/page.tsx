export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">About Me</h2>
        <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-300 bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
          <p className="mb-4">
            I'm <span className="text-blue-400 font-semibold">Yunus Yerli</span>, a senior frontend engineer based in Istanbul with over 6 years of experience building modern web applications. Currently, I work remotely for SalesAgility, a UK-based company, where I focus on building scalable, secure, and performant UIs.
          </p>
          <p className="mb-4">
            My main tech stack includes <b>Angular, TypeScript, JavaScript, and Tailwind CSS</b>, but I'm also comfortable with <b>React, Vue, and Next.js</b>. I'm passionate about creating user-friendly interfaces, writing clean and maintainable code, and continually improving through learning and collaboration.
          </p>
          <p>
            I'm always open to exciting projects and teams that value quality, performance, and thoughtful design. Whether it's joining a new product team or contributing to a creative build, I'm ready to take on new challenges.
          </p>
        </div>
      </div>
    </section>
  );
}