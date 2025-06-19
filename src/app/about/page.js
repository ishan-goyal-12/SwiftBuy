import Navbar from "../components/Navbar";

export default function About() {
    return (
        <div>
            <Navbar />
            <div className="p-8">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>
                <p className="text-gray-700">Welcome to SwiftBuy! Learn more about our mission and team here.</p>
            </div>
        </div>

    );
}
