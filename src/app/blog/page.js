import Navbar from "../components/Navbar";

export default function Blog() {
    return (
        <div>
            <Navbar />
            <div className="p-8">
                <h1 className="text-3xl font-bold mb-4">Blog</h1>
                <p className="text-gray-700">Stay tuned for updates, news, and articles from SwiftBuy!</p>
            </div>
        </div >
    );
}
