import ItineraryPage from "@/components/itinerary/ItineraryPage";
import { uganda5DayKisoro } from "@/lib/itineraries";
import { tripMetadata } from "@/lib/seo";

export const metadata = tripMetadata(uganda5DayKisoro, "/Ugandan-5-Days");

export default function Page() {
  return <ItineraryPage trip={uganda5DayKisoro} />;
}
