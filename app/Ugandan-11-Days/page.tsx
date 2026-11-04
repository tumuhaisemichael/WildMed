import ItineraryPage from "@/components/itinerary/ItineraryPage";
import { uganda11DayCrossBorder } from "@/lib/itineraries";
import { tripMetadata } from "@/lib/seo";

export const metadata = tripMetadata(uganda11DayCrossBorder, "/Ugandan-11-Days");

export default function Page() {
  return <ItineraryPage trip={uganda11DayCrossBorder} />;
}
