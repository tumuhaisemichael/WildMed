import ItineraryPage from "@/components/itinerary/ItineraryPage";
import { uganda8DayCrossBorder } from "@/lib/itineraries";
import { tripMetadata } from "@/lib/seo";

export const metadata = tripMetadata(uganda8DayCrossBorder, "/Ugandan-8days2");

export default function Page() {
  return <ItineraryPage trip={uganda8DayCrossBorder} />;
}
