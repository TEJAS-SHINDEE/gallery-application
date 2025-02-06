
export const Imageinfo = () => {
    return (
        <div className="absolute left-0 bottom-0 h-18 w-full backdrop-blur-xs rounded-b-sm">
            <div className=" font-semibold border-l-2  m-2 border-l-2">
                <p className="ml-2 text-white text-sm">
                    In the Paintings #{image.imageId}
                </p>
                <p className="flex gap-2 text-xs text-white items-center">
                    <Image
                        className="rounded-full h-6 w-6 ml-3"
                        src={image.uploadedBy.profilePicUrl}
                        width={20}
                        height={20}
                        alt="Picture of the author"
                    />
                    {image.uploadedBy.name}
                </p>
            </div>
        </div>
    )
}