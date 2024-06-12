export const CencelBtn=({handleCancel}) => {
    return (
        <button
                  className="px-2 py-2 bg-gray-400 text-white rounded-md mr-2"
                  onClick={()=>handleCancel()}
                >
                  Cancel
                </button>
    )
}



const NextBtn=({handleNext}) => {
    return (
        <button
        className="px-3 py-2 bg-green-500 text-white rounded-md"
        onClick={()=>handleNext()}
      >
        Next
      </button>
    )
}

export default NextBtn
