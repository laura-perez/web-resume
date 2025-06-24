import { useEffect, useState } from 'react';
import { experiences } from '../data/experiences';
import { formations } from '../data/formations';
import { skillCategories } from '../data/skills';
import { softSkills } from '../data/softSkills';
import { personalInfoComplete } from '../data/profile';
import { useLockBodyScroll } from '../hooks';
import type { PostData } from '../data/profile';

interface CarouselStoryProps {
  post: PostData;
  onClose: () => void;
}

export default function CarouselStory({ post, onClose }: CarouselStoryProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Lock body scroll when modal is open
  useLockBodyScroll(true);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);
  const getSlides = () => {
    switch (post.type) {
      case 'experiences':
        return experiences;
      case 'formations':
        return formations;
      case 'skills':
        return skillCategories;
      case 'softskills':
        return softSkills;
      default:
        return [{ id: 'single', title: post.title }];
    }
  };

  const slides = getSlides();
  const totalSlides = slides.length;
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && totalSlides > 1) {
      nextSlide();
    }
    if (isRightSwipe && totalSlides > 1) {
      prevSlide();
    }
  };

  const renderSlideContent = (slideIndex: number) => {
    switch (post.type) {
      case 'experiences':
        const exp = experiences[slideIndex];
        return (
          <div className="p-6 h-full overflow-y-auto">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center text-white text-xl`}>
                {exp.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-ig-gray-800">{exp.title}</h3>
                <p className="text-retro-purple font-medium">{exp.company}</p>
                <p className="text-sm text-ig-gray-500">{exp.period} • {exp.location}</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="font-medium text-ig-gray-800 mb-2">Description</h4>
              <ul className="space-y-1">
                {exp.description.map((desc, index) => (
                  <li key={index} className="text-sm text-ig-gray-600 flex items-start">
                    <span className="text-retro-purple mr-2">•</span>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="font-medium text-ig-gray-800 mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-ig-gray-100 text-ig-gray-700 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="font-medium text-ig-gray-800 mb-2">Réalisations</h4>
              <ul className="space-y-1">
                {exp.achievements.map((achievement, index) => (
                  <li key={index} className="text-sm text-ig-gray-600 flex items-start">
                    <span className="text-retro-green mr-2">✓</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'formations':
        const formation = formations[slideIndex];
        return (
          <div className="p-6 h-full overflow-y-auto">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${formation.color} flex items-center justify-center text-white text-xl`}>
                {formation.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-ig-gray-800">{formation.degree}</h3>
                <p className="text-retro-purple font-medium">{formation.school}</p>
                <p className="text-sm text-ig-gray-500">{formation.period} • {formation.location}</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-ig-gray-800 mb-2">Description</h4>
              <ul className="space-y-1">
                {formation.description.map((desc, index) => (
                  <li key={index} className="text-sm text-ig-gray-600 flex items-start">
                    <span className="text-retro-purple mr-2">•</span>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-ig-gray-800 mb-2">Spécialisations</h4>
              <div className="flex flex-wrap gap-2">
                {formation.specializations.map((spec) => (
                  <span key={spec} className="px-3 py-1 bg-ig-gray-100 text-ig-gray-700 text-sm rounded-full">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-ig-gray-800 mb-2">Projets marquants</h4>
              <ul className="space-y-1">
                {formation.projects.map((project, index) => (
                  <li key={index} className="text-sm text-ig-gray-600 flex items-start">
                    <span className="text-retro-green mr-2">🚀</span>
                    {project}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'skills':
        const category = skillCategories[slideIndex];
        return (
          <div className="p-6 h-full overflow-y-auto">
            <div className="flex items-center space-x-3 mb-6">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white text-xl`}>
                {category.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-ig-gray-800">{category.name}</h3>
                <p className="text-sm text-ig-gray-500">{category.skills.length} compétences</p>
              </div>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.id} className="bg-ig-gray-50 rounded-lg p-4">                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{skill.icon}</span>
                      <h4 className="font-medium text-ig-gray-800">{skill.name}</h4>
                    </div>
                  </div>
                  
                  {/* Skill Level */}
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-ig-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-ig-gray-500">{skill.level}/5</span>
                  </div>
                </div>
              ))}
            </div>
          </div>        );

      case 'softskills':
        const softSkill = softSkills[slideIndex];
        return (
          <div className="p-6 h-full overflow-y-auto">            <div className="text-center mb-6">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${softSkill.color} flex items-center justify-center text-white text-3xl`}>
                {softSkill.icon}
              </div>
              <h3 className="font-semibold text-xl text-ig-gray-800">{softSkill.name}</h3>
            </div>{softSkill.description && (
              <div className="mb-6">
                <p className="text-center text-ig-gray-600 leading-relaxed">
                  {softSkill.description}
                </p>
              </div>
            )}            {/* Skill Level Visual - Full colored progress bar */}
            <div className="mb-6">
              <div className="flex justify-center">
                <div className="w-full max-w-xs bg-ig-gray-200 rounded-full h-3">
                  <div 
                    className={`bg-gradient-to-r ${softSkill.color} h-3 rounded-full w-full transition-all duration-500`}
                  />
                </div>
              </div>
            </div>

            {/* Message about professional DNA */}
            <div className="text-center">
              <p className="text-xs text-ig-gray-500">
                Cette qualité fait partie de mon ADN professionnel
              </p>
            </div>
          </div>
        );

      case 'personal':
        return (          <div className="p-6 h-full overflow-y-auto">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img src={personalInfoComplete.profileImage} alt={personalInfoComplete.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-lg text-ig-gray-800">{personalInfoComplete.name}</h3>
              <p className="text-retro-purple">{personalInfoComplete.title}</p>
            </div>

            <div className="mb-6">
              <h4 className="font-medium text-ig-gray-800 mb-3">🌟 Centres d'intérêt</h4>
              <div className="space-y-2">
                {personalInfoComplete.interests.map((interest: string, index: number) => (
                  <div key={index} className="text-sm text-ig-gray-600 p-2 bg-ig-gray-50 rounded-lg">
                    {interest}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-ig-gray-800 mb-3">🗣️ Langues</h4>
              <div className="space-y-2">
                {personalInfoComplete.languages.map((lang: { name: string; level: string }, index: number) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-ig-gray-50 rounded-lg">
                    <span className="text-sm text-ig-gray-700">{lang.name}</span>
                    <span className="text-sm text-retro-purple font-medium">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="p-6 h-full overflow-y-auto">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-retro-orange to-retro-yellow flex items-center justify-center text-white text-3xl">
                📱
              </div>
              <h3 className="font-semibold text-lg text-ig-gray-800">Restons en contact !</h3>
              <p className="text-sm text-ig-gray-500">N'hésitez pas à me contacter</p>
            </div>            <div className="space-y-4">
              <a href={`mailto:${personalInfoComplete.email}`} className="flex items-center space-x-3 p-3 bg-ig-gray-50 rounded-lg hover:bg-ig-gray-100 transition-colors">
                <div className="w-10 h-10 bg-retro-purple rounded-lg flex items-center justify-center text-white">
                  📧
                </div>
                <div>
                  <p className="font-medium text-ig-gray-800">Email</p>
                  <p className="text-sm text-ig-gray-600">{personalInfoComplete.email}</p>
                </div>
              </a>

              <a href={`tel:${personalInfoComplete.phone}`} className="flex items-center space-x-3 p-3 bg-ig-gray-50 rounded-lg hover:bg-ig-gray-100 transition-colors">
                <div className="w-10 h-10 bg-retro-green rounded-lg flex items-center justify-center text-white">
                  📞
                </div>
                <div>
                  <p className="font-medium text-ig-gray-800">Téléphone</p>
                  <p className="text-sm text-ig-gray-600">{personalInfoComplete.phone}</p>
                </div>
              </a>

              <a href={`https://linkedin.com/in/${personalInfoComplete.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 bg-ig-gray-50 rounded-lg hover:bg-ig-gray-100 transition-colors">
                <div className="w-10 h-10 bg-retro-blue rounded-lg flex items-center justify-center text-white">
                  💼
                </div>
                <div>
                  <p className="font-medium text-ig-gray-800">LinkedIn</p>
                  <p className="text-sm text-ig-gray-600">{personalInfoComplete.linkedin}</p>
                </div>
              </a>

              <a href={`https://github.com/${personalInfoComplete.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 bg-ig-gray-50 rounded-lg hover:bg-ig-gray-100 transition-colors">
                <div className="w-10 h-10 bg-ig-gray-800 rounded-lg flex items-center justify-center text-white">
                  💻
                </div>
                <div>
                  <p className="font-medium text-ig-gray-800">GitHub</p>
                  <p className="text-sm text-ig-gray-600">{personalInfoComplete.github}</p>
                </div>
              </a>
            </div>
          </div>
        );

      default:
        return null;
    }
  };
  return (
    <div className="carousel-overlay" onClick={onClose}>
      <div className="carousel-container relative flex items-center justify-center">        {/* Left Navigation Arrow */}
        {totalSlides > 1 && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="carousel-nav-button carousel-nav-left bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all z-10"
          >
            ←
          </button>
        )}

        <div 
          className="carousel-content" 
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Header */}
          <div className="carousel-header">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${post.color} flex items-center justify-center text-white text-sm`}>
                {post.icon}
              </div>
              <h2 className="font-semibold text-ig-gray-800">{post.title}</h2>
            </div>
            <button onClick={onClose} className="carousel-close">
              ×
            </button>
          </div>          {/* Content */}
          <div className="flex-1 relative overflow-hidden">
            {renderSlideContent(currentSlide)}
              {/* Internal Navigation for Mobile (fallback for very small screens) */}
            {totalSlides > 1 && (
              <>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  className="carousel-internal-nav carousel-internal-left absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all text-sm"
                >
                  ←
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  className="carousel-internal-nav carousel-internal-right absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all text-sm"
                >
                  →
                </button>
              </>
            )}
            
            {/* Pagination */}
            {totalSlides > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>        {/* Right Navigation Arrow */}
        {totalSlides > 1 && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="carousel-nav-button carousel-nav-right bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all z-10"
          >
            →
          </button>
        )}
      </div>
    </div>
  );
}
