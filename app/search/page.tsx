import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";
import SearchInput from "@/components/SeachInput";
import SearchContent from "./components/SearchContent";

interface SearchProps {
    searchParams: {
        title: string;
    }
};

const Search = async ({searchParams}: SearchProps)=> {
    const songs = await getSongsByTitle(searchParams.title);

    return (
        <div
            className="
                bg-neutral-900
                rounded-lg
                h-full
                w-full
                overflow-hidden
                overflow-y-auto
            "
        >
            <Header className="from-bg-neutral-900">
                <div className="mb-2 flex flex-col gap-y-6">
                    <h1 className="Text-white text-3xl font-semibold">Search</h1>
                </div>
                <SearchInput />
            </Header>

            <SearchContent songs={songs} />
        </div>
    )
};

export default Search;