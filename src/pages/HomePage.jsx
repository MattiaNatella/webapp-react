import BookCard from "../components/BookCard"

const HomePage = () => {
    return (
        <>
            <h1 className="text-center">Lista films</h1>
            <div className="row row-cols-1 row-cols-sm-3 justify-content-between">
                <BookCard />
                <BookCard />
                <BookCard />
            </div>

        </>



    )
}

export default HomePage