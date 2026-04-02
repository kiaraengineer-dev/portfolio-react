import { useEffect } from "react";
import { Linkedin, Github, ExternalLink } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const socialLinks = [
  {
    name: "Linkedin ",
    displayName: "Linkedin",
    subText: "Acesse meu Linkedin",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/kiara-toster-engineer/",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true,
  },
  {
    name: "GitHub",
    displayName: "GitHub",
    subText: "kiaraengineer-dev",
    icon: Github,
    url: "https://github.com/kiaraengineer-dev",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
];

const SocialLinks = () => {
  const primaryLink = socialLinks.find((link) => link.isPrimary);
  const secondaryLinks = socialLinks.filter((link) => !link.isPrimary);

  useEffect(() => {
    AOS.init({ offset: 10 });
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3
        className="text-xl font-semibold text-white mb-6 flex items-center gap-2"
        data-aos="fade-down"
      >
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Entre em contato comigo
      </h3>

      <div className="flex flex-col gap-4">
       
        {primaryLink && (
          <a
            href={primaryLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 rounded-lg 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
            data-aos="fade-up"
          >
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                          bg-gradient-to-r ${primaryLink.gradient}`}
            />

            <div className="relative flex items-center gap-4">
              <div className="relative p-2 rounded-md">
                <primaryLink.icon
                  className="w-6 h-6"
                  style={{ color: primaryLink.color }}
                />
              </div>

              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-200">
                  {primaryLink.displayName}
                </span>
                <span className="text-sm text-gray-400">
                  {primaryLink.subText}
                </span>
              </div>
            </div>

            <ExternalLink className="w-5 h-5 text-gray-400" />
          </a>
        )}

        {/* 🔹 LINKS SECUNDÁRIOS (GitHub) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {secondaryLinks.map((link, index) => {
            const Icon = link.icon;

            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 p-4 rounded-xl 
                           bg-white/5 border border-white/10 overflow-hidden
                           hover:border-white/20 transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                              bg-gradient-to-r ${link.gradient}`}
                />

                <div className="relative p-2 rounded-lg">
                  <Icon className="w-5 h-5" style={{ color: link.color }} />
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-200">
                    {link.displayName}
                  </span>
                  <span className="text-xs text-gray-400">{link.subText}</span>
                </div>

                <ExternalLink className="ml-auto w-4 h-4 text-gray-400" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
