import Heroes from "./_components/heroes";
import Heading from "./_components/heading";
import Footer from "./_components/footer";
const MarketingPage = () => {
    return (
        <div className="min-h-full flex flex-col ">
            <div className="flex flex-col items-center juystify-center
            md:justify-start text-center gap-y-8 flex-1 px-6 pb1-0">
                <Heading />
                <Heroes />
                <Footer />
            </div>
        </div>
    );
}

export default MarketingPage;