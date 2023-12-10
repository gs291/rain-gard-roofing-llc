import GalleryGridItemImage from "@/app/ui/gallery-grid-item-image";

export default function Gallery() {
  return (
    <div className="min-h-screen grid text-center grid-cols-1 xl:grid-cols-2 px-4 pb-24 md:px-10 xl:20">
      <GalleryGridItemImage src={"/roof_1_person_carrying.jpg"} priority/>
      <GalleryGridItemImage src={"/roof_1_person.jpg"} priority/>
      <GalleryGridItemImage src={"/hammer_to_roof.jpg"} />
      <GalleryGridItemImage src={"/roof_2_people.jpg"} />
    </div>
  );
}