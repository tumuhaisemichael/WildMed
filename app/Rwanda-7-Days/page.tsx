import ItineraryPage from "@/components/itinerary/ItineraryPage";
import { rwanda7Day } from "@/lib/itineraries";
import { tripMetadata } from "@/lib/seo";

export const metadata = tripMetadata(rwanda7Day, "/Rwanda-7-Days");

export default function Page() {
  return <ItineraryPage trip={rwanda7Day} />;
}
