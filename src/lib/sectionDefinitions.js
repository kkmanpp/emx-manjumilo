import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";
export const getSectionDefinitions = (t) => ({
  homepage: [
    {
      id: "eventVideo",
      title: t.homepage.eventVideo,
      priority: 1,
      isVisible: false,
      region: "left",
      content: () => (
        <div className="m-4 flex flex-col justify-center items-center ">
          <VideoPlayer videoUrl={process.env.VIDEO_URL} />
        </div>
      ),
    },
    {
      id: "ourPartner",
      title: t.homepage.ourPartner,
      priority: 2,
      isVisible: true,
      region: "left",
      content: () => (
        <div className="m-4 pt-2 largeMobile:p-0 largeMobile:flex largeMobile:flex-col largeMobile:items-center">
          <Image
            src="/partner.gif"
            alt="our-partner"
            width={500}
            height={300}
            className="object-contain w-auto largeMobile:w-[28rem]"
          />
        </div>
      ),
    },
    {
      id: "promotion",
      title: t.homepage.promotion,
      priority: 3,
      isVisible: true,
      region: "right",
      content: () => (
        <div className="m-4 largeMobile:flex largeMobile:flex-col largeMobile:items-center">
          <Image
            src="/delta.jpeg"
            alt="promotion"
            width={500}
            height={300}
            className="object-contain w-auto laptop:w-[19rem]"
          />
        </div>
      ),
    },
  ],
});
