import ItineraryPage from "@/components/itinerary/ItineraryPage";
import { uganda6DayKisoro } from "@/lib/itineraries";
import { tripMetadata } from "@/lib/seo";

export const metadata = tripMetadata(uganda6DayKisoro, "/Ugandan-6Days2");

export default function Page() {
  return <ItineraryPage trip={uganda6DayKisoro} />;
}
