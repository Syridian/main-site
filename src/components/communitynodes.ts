export interface CommunityNodesType {
	// id should be the full id of the node e.g. DA56A740
	id: string;
	// short_name should be the 4 character short name of device e.g.  CM06
	short_name: string;
	name: string;
	description: string;
	approach_information: string;
	gps_location: CommunityNodeGps;
	hardware_model: string;
	device_role: NodeRole;
	maintainers: NodeMaintainer[];
}

export type NodeRole = "Client" | "Client Mute" | "Client Hidden" | "Tracker" | "Lost And Found" | "Sensor" | "TAK" | "Router" | "Router Late" | "Repeater"

export interface CommunityNodeGps {
	longitude: number;
	latitude: number
}

export interface  NodeMaintainer {
	name: string; 
	note: string | null;
	role: NodeMaintainerRole;
	contact: NodeMaintainerContact[]
}

export type NodeMaintainerRole = "Owner" | "Maintaner" | "Community";

export interface NodeMaintainerContact {
	type: NodeMaintainerContactType;
	data: string;
}
export type NodeMaintainerContactType = "Phone" | "Email" | "Discord"

export const CommunityNodes: CommunityNodesType[]= [
	{
		id: "E1455C5F",
		short_name: "CM06",
		name: "Googon’ish", 
		description: "Communication node for Googong",
		approach_information: "Take some trail to the site. it's a long walk",
		gps_location: {
			latitude: -35.4123776,
			longitude: 149.2746240,
		},
		hardware_model: "RAK4631",
		device_role: "Client",
		maintainers: [
			{
				name: "Someone",
				note: "Only contact if there are issues",
				role: "Owner",
				contact: [
					{
						type: "Email",
						data: "someone@example.com"
					}
				]
			},
			{
				name: "Canberra Meshtastic Community",
				note: null,
				role: "Community",
				contact: [
					{
						type: "Discord",
						data: "https://discord.gg/7H7dmc5tzb"
					}
				]
			}

		]
	},
	{
		id: "AA51A1A8",
		short_name: "SN03",
		name: "SyriNet Research", 
		description: "This node services the local ANU community allowing Researchers and Students access to the greater Canberra Mesh from the ANU campus.  It exists to increase availability to the mesh as local access on campus is hit and miss without it, though due to all the buildings there are still quite a few black spots.  ",
		approach_information: "There is no public access to this node, it's not servicable by anyone outside of the ANU and requires special access.",
		gps_location: {
			latitude: -35.27803,
			longitude: 149.11406,
		},
		hardware_model: "RAK4631",
		device_role: "Client",
		maintainers: [
			{
				name: "Steve",
				note: "Only contact if there are issues",
				role: "Owner",
				contact: [
					{
						type: "Email",
						data: "steve@syridian.net"
					}
				]
			},
			{
				name: "Canberra Meshtastic Community",
				note: null,
				role: "Community",
				contact: [
					{
						type: "Discord",
						data: "https://discord.gg/7H7dmc5tzb"
					}
				]
			}

		]
	}

]
