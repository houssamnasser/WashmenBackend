import { PartnersInterface } from "../Interfaces";
import { calculateDistance } from "../services/distance.service";
import partnersFile from "../utils/partners.json";

export const getPartners = async (
  req: { body: { range: number } },
  res: any
) => {
  //read json file
  const partners: PartnersInterface.Partner[] =
    partnersFile as PartnersInterface.Partner[];

  const range: number = req?.body?.range;

  const officesInRange: PartnersInterface.OfficesInRange[] = [];

  for (let item of partners) {
    //iterate over every office
    for (let office of item.offices as PartnersInterface.Office[]) {
      //split coordinates into array
      const coordinates: number[] = office.coordinates?.split(",")?.map(Number);

      //calculate distance
      const distance: number = calculateDistance(
        coordinates[0],
        coordinates[1]
      );

      const partner: PartnersInterface.Partner = { ...item };
      delete partner.offices;

      //check range and add it to the array
      if (distance <= range) {
        officesInRange.push({
          distance,
          partner,
          office,
        });
      }
    }

    //sort the partners
    officesInRange?.sort((a, b) =>
      a.partner.organization.localeCompare(b.partner.organization)
    );
  }

  res.json({
    partners: officesInRange,
  });
};
