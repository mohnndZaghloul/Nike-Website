const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImage}) => {
    const handleClick = () => {
        if(bigShoeImage !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe);
        }
    }
  return (
    <div 
        className={
            `border-2 rounded-xl cursor-pointer
            ${bigShoeImage === imgURL.bigShoe
                ? 'border-coral-red'
                : 'border-transparent'
            }
            max-sm:flex-1
            
            `}
            onClick={handleClick}>
        <div className="flex justify-center items-center bg-card bg-center bg-cover w-24 h-24 xl:w-40 xl:h-40  rounded-xl max-sm:p-3 p-2">
            <img src={imgURL.thumbnail}alt="shoe collection"
                className="object-contain w-full"
            />
        </div>
    </div>
  )
}

export default ShoeCard