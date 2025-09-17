
import { Star, ChevronRight } from "lucide-react";
import SendRequestButton from "@/components/ui/SendRequestButton";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                    <img src="/lovable-uploads/e352beda-99fb-4efc-910e-77075ea53ef1.png" alt="GST Registration for Foreigners" className="rounded-lg w-full shadow-md" />
                    <h2 className="text-lg font-semibold mt-4">GST Registration for Foreigners</h2>
                    <ul className="text-sm text-gray-600 mt-2 space-y-1">
                        <li>PAN Card Company</li>
                        <li>Incorporation Certificate</li>
                        <li>Promoters Passport Size Photo</li>
                    </ul>
                    <a href="#" className="text-blue-600 hover:underline text-sm">Load More</a>
                </div>
                <div className="md:col-span-2">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        GST Registration for Foreigners
                    </h1>
                    <div className="flex items-center mt-2">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                fill="currentColor"
                                className="w-5 h-5 text-yellow-400"
                            />
                        ))}
                        <span className="ml-2 text-gray-600">(1)</span>
                    </div>
                    <p className="mt-4 text-gray-600">
                        GST registration as non-resident taxable person with LEDGERS Accounting software.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-6">
                        <div className="border rounded-lg p-4 shadow-sm bg-stone-50 border-dashed border-orange-400">
                            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">1 Exclusive Offers</span>
                            <h3 className="text-md font-bold mt-2">GST Foreigners</h3>
                            <ul className="space-y-1 text-gray-600 mt-3 text-sm">
                                <li className="flex items-start"><ChevronRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>Indian Authorized Representative</span></li>
                                <li className="flex items-start"><ChevronRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>Virtual Office</span></li>
                                <li className="flex items-start"><ChevronRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>GST Registration</span></li>
                                <li className="flex items-start"><ChevronRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>1 Year GST Filing & Compliance</span></li>
                                <li className="flex items-start"><ChevronRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" /> <span>GST Payment Facilitation</span></li>
                            </ul>
                            <SendRequestButton 
                                serviceName="GST Registration for Foreigners"
                                className="w-full mt-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
