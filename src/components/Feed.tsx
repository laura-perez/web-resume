import { useState } from 'react';
import PostCard from './PostCard';
import CarouselStory from './CarouselStory';
import { postsData } from '../data/profile';
import type { PostData } from '../data/profile';

export default function Feed() {
  const [selectedPost, setSelectedPost] = useState<PostData | null>(null);

  const handlePostClick = (post: PostData) => {
    setSelectedPost(post);
  };

  const handleCloseCarousel = () => {
    setSelectedPost(null);
  };

  return (
    <div className="pb-4">
      {/* Posts Grid */}
      <div className="post-grid">
        {postsData.map((post) => (
          <PostCard 
            key={post.id}
            post={post}
            onClick={() => handlePostClick(post)}
          />
        ))}
      </div>

      {/* Carousel Modal */}
      {selectedPost && (
        <CarouselStory 
          post={selectedPost}
          onClose={handleCloseCarousel}
        />
      )}
    </div>
  );
}
