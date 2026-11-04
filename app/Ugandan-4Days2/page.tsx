import ItineraryPage from "@/components/itinerary/ItineraryPage";
import { uganda4DayFlyIn } from "@/lib/itineraries";
import { tripMetadata } from "@/lib/seo";

export const metadata = tripMetadata(uganda4DayFlyIn, "/Ugandan-4Days2");

export default function Page() {
  return <ItineraryPage trip={uganda4DayFlyIn} />;
}
