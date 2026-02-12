import { ArrowUpRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    category: "Adiel's Thoughts",
    date: "July, 2025",
    title: "Calm the chaos",
    excerpt:"Things that keep me grounded when life feels too loud",
    link: "https://adielblogs.studio/post/6867c6869b5526d645340218", 
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "Tech Savvy",
    title: "My favorite free tools for student developers",
    excerpt: "Favorite free tools for student developers",
    link: "https://adielblogs.studio/post/684bd32adbdd71f121662d95",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Adventures",
    title: "What hiking taught me about pacing life",
    excerpt: "Reflecting on what adventures like hiking have taught me about life.",
    link: "https://adielblogs.studio/post/684c181bd82138fc69fb40ef",
    image: "https://images.unsplash.com/photo-1499750310159-5298019773dd?q=80&w=2128&auto=format&fit=crop"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-32 px-8 lg:px-24 bg-gray-50">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <span className="text-brand-pink-dark font-sans tracking-[0.2em] uppercase text-xs font-bold block mb-4">
            Writing & Thoughts
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-brand-black leading-none">
            Latest Articles
          </h2>
        </div>
        
        <a 
          href="https://your-main-blog-website.com" // REPLACE THIS with your real blog home page
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest hover:text-brand-pink-dark transition-colors"
        >
          View All Posts
          <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {posts.map((post) => (
          <a 
            key={post.id} 
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="overflow-hidden mb-6 aspect-[4/3]">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
              />
            </div>
            
            <div className="flex justify-between items-center mb-3">
              <span className="text-brand-pink-dark font-sans text-[10px] uppercase tracking-widest font-bold">
                {post.category}
              </span>
              <span className="text-gray-400 font-sans text-[10px] uppercase tracking-widest">
                {post.date}
              </span>
            </div>
            
            <h3 className="font-serif text-2xl mb-3 leading-tight group-hover:underline decoration-brand-pink-dark underline-offset-4 transition-all">
              {post.title}
            </h3>
            
            <p className="font-sans text-sm text-brand-gray leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}