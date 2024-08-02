import { Location } from "../model/location.model";
import { Road } from "../model/Road.model";

interface Node {
    id: string;
    distance: number;
}

export const getShortestPath = async (startLocationId: string, endLocationId: string) => {
    const locations = await Location.find();
    const roads = await Road.find();

    const graph: { [key: string]: Node[] } = {};

    roads.forEach(road => {
        if (!graph[road.start_location_id.toString()]) {
            graph[road.start_location_id.toString()] = [];
        }
        graph[road.start_location_id.toString()].push({ id: road.end_location_id.toString(), distance: road.distance });

        if (!graph[road.end_location_id.toString()]) {
            graph[road.end_location_id.toString()] = [];
        }
        graph[road.end_location_id.toString()].push({ id: road.start_location_id.toString(), distance: road.distance });
    });

    const distances: { [key: string]: number } = {};
    const previous: { [key: string]: string | null } = {};
    const queue: string[] = [];

    locations.forEach(location => {
        distances[location.id] = Infinity;
        previous[location.id] = null;
        queue.push(location.id);
    });

    distances[startLocationId] = 0;

    while (queue.length > 0) {
        const current = queue.reduce((minNode, node) => (distances[node] < distances[minNode] ? node : minNode), queue[0]);
        queue.splice(queue.indexOf(current), 1);

        if (current === endLocationId) {
            const path = [];
            let step = current;
            while (previous[step]) {
                path.unshift(step);
                step = previous[step]!;
            }
            path.unshift(startLocationId);
            return path;
        }

        graph[current].forEach(neighbor => {
            const alt = distances[current] + neighbor.distance;
            if (alt < distances[neighbor.id]) {
                distances[neighbor.id] = alt;
                previous[neighbor.id] = current;
            }
        });
    }

    return null;
};