import ItineraryPage from "@/components/itinerary/ItineraryPage";
import { rwanda7Day } from "@/lib/itineraries";

export default function Page() {
  return <ItineraryPage trip={rwanda7Day} />;
}
