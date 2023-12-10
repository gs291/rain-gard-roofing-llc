import Image from 'next/image';

export default function GalleryGridItemImage({ src, priority, ...props }: any) {
  return ( 
    <div className="p-10 min-h-[720px] max-w-7xl" {...props}>
      <div className="relative min-w-full min-h-full overflow-hidden">
        <Image
          fill
          priority={priority}
          src={src}
          sizes="(max-width: 1280px) 100vw, 50vw"
          alt="Screenshots of the dashboard project showing desktop version"
          className="object-cover"
        />
      </div>
    </div>
  );
}