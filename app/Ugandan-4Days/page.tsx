import ItineraryPage from "@/components/itinerary/ItineraryPage";
import { uganda4Day } from "@/lib/itineraries";
import { tripMetadata } from "@/lib/seo";

export const metadata = tripMetadata(uganda4Day, "/Ugandan-4Days");

export default function Page() {
  return <ItineraryPage trip={uganda4Day} />;
}
