import { personalInfo, personalInfoComplete, profileStats } from '../data/profile';
import { highlightsData } from '../data/highlights';
import HighlightCarousel from './HighlightCarousel';

interface ProfileProps {
  onOpenChat: () => void;
}

export default function Profile({ onOpenChat }: ProfileProps) {
  return (
    <div className="profile-section">
      {/* Top Section: Profile Picture, Username and Actions */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 space-y-4 sm:space-y-0">
        {/* Profile Picture with Story Ring */}
        <div className="story-ring profile-picture-responsive-margin self-center sm:self-start">
          <div className="story-inner">
            <img 
              src={personalInfo.profileImage} 
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Username and Actions */}
        <div className="flex-1 profile-responsive-spacing">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4">
            <div className="flex items-center space-x-2">
              <h1 className="text-lg sm:text-xl font-normal text-ig-gray-800">
                {personalInfo.name.toLowerCase().replace(' ', '')}
              </h1>
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
              {/* Action Buttons */}
            <div className="flex space-x-2">                <button 
                onClick={onOpenChat}
                className="bg-retro-purple hover:bg-purple-600 text-white text-xs sm:text-sm font-medium py-1.5 px-3 sm:px-4 rounded text-center transition-colors shadow-retro cursor-pointer" 
                style={{backgroundColor: 'var(--retro-purple)'}}
              >
                Message
              </button>              <button 
                onClick={() => {
                  window.open('https://www.linkedin.com/in/laura-perez-fr/', '_blank', 'noopener,noreferrer');
                }}
                className="bg-ig-gray-200 hover:bg-ig-gray-300 text-ig-gray-800 text-xs sm:text-sm font-medium py-1.5 px-3 sm:px-4 rounded transition-colors text-center cursor-pointer"
              >
                💼 LinkedIn
              </button>
              <button className="bg-ig-gray-200 hover:bg-ig-gray-300 text-ig-gray-800 text-xs sm:text-sm font-medium py-1.5 px-2 sm:px-3 rounded transition-colors cursor-pointer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
          </div>          {/* Stats - Below username */}
          <div className="flex justify-start space-x-4 sm:space-x-8 mb-4">
            <div className="text-center">
              <div className="font-semibold text-sm sm:text-base text-ig-gray-800">{profileStats.experience}</div>
              <div className="text-xs sm:text-sm text-ig-gray-500">ans expérience</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-sm sm:text-base text-ig-gray-800">{profileStats.international}</div>
              <div className="text-xs sm:text-sm text-ig-gray-500">ans international</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-sm sm:text-base text-ig-gray-800">{profileStats.technologies}</div>
              <div className="text-xs sm:text-sm text-ig-gray-500">technologies</div>
            </div>
          </div>          {/* Profile Info - Below stats */}
          <div className="profile-description space-y-1 mb-4">
            <h2 className="font-semibold text-xs sm:text-sm text-ig-gray-800">{personalInfo.name}</h2>
            <p className="text-xs sm:text-sm text-ig-gray-800">
              <span>{personalInfoComplete.title}</span>
            </p>
            <p className="text-xs sm:text-sm text-ig-gray-800">
              <span>📫 </span>
              <a href={`mailto:${personalInfoComplete.email}`} className="text-blue-800 break-all">
                {personalInfoComplete.email}
              </a>
            </p>
            <p className="text-xs sm:text-sm text-ig-gray-800">
              <span>🔗 </span>
              <a href={`https://${personalInfo.website}`} className="text-blue-800 break-all" target="_blank" rel="noopener noreferrer">
                {personalInfo.website}
              </a>
            </p>
          </div>
        </div>
      </div>      {/* Story Highlights */}
      <HighlightCarousel highlights={highlightsData} />
    </div>
  );
}
