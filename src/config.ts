import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "ustars",
    name: "Embeddable House",
    chainId: "elgafar-1",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            marketplace:
                "andr1k3gvrjtragry5ds92w7vgpnm8j0hrxj7ulm8qnw68xjrytgstrjqa480s4",
            cw721: "andr1y93d5zp4pm3hf4z4f4cn5zhgw6u93htz3jvh5ngy5hpuw6ls0hysr9cjdr",
            name: "NFTicket",
            type: ICollectionType.MARKETPLACE,
            id: "embeddables-marketplace-1",
        },
    ],
};

export default CONFIG;
