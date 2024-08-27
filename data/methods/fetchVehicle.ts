import { VehicleUrlId, Vehicle } from "../types";

export const fetchVehicle = async (id: VehicleUrlId) => {
	const data: Vehicle = await fetch(id, { cache: 'force-cache' }).then(res => res.json());

	return data;
}