const itemData = [
  {
    id: 1,
    description: "Macbook for sell",
    prices: "500",
    url: "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
  },
  {
    id: 2,
    description: "T-Shite for sell",
    prices: "200",
    url: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",
  },
  {
    id: 3,
    description: "shose for sell",
    prices: "150",
    url: "https://i.picsum.photos/id/103/2592/1936.jpg?hmac=aC1FT3vX9bCVMIT-KXjHLhP6vImAcsyGCH49vVkAjPQ",
  },
];
const profileDetailData = [
  {
    id: "1",
    title: "Muhammad Bilal Khan",
    subTitle: "11 listing",
    image:
      "https://pbs.twimg.com/profile_images/1350007502214209537/c7VRgZ_w_400x400.jpg",
  },
  {
    id: "2",
    title: " AbduallJalal Khan",
    subTitle: "10 listing",
    image:
      "https://scontent.flhe7-1.fna.fbcdn.net/v/t1.6435-9/134149605_118788623414940_4731672291048745309_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEjfzsrGqkeIfxXQdEN7toEubWabRc57ay5tZptFzntrCu7DKO8RG3an3gCtFQ13T_zp2YhYcqL-OSaeyuhj8MY&_nc_ohc=ctyuL_2FsHEAX-J2XJU&_nc_oc=AQkzXmV3bq_SIypmXtwGfc8hJvyU4lSdYsXcNZDp6PD4S3ZXv8Ba3S3NYxpjKoBOqAQ&_nc_ht=scontent.flhe7-1.fna&oh=2de1746908d132ef4e26945fd6c7d6e5&oe=60D29969",
  },
  {
    id: "3",
    title: "Muhammad Bilal Khan",
    subTitle: "11 listing",
    image:
      "https://pbs.twimg.com/profile_images/1350007502214209537/c7VRgZ_w_400x400.jpg",
  },
  {
    id: "4",
    title: "Muhammad Bilal Khan",
    subTitle: "11 listing",
    image:
      "https://pbs.twimg.com/profile_images/1350007502214209537/c7VRgZ_w_400x400.jpg",
  },
  {
    id: "5",
    title: "Muhammad Bilal Khan",
    subTitle: "11 listing",
    image:
      "https://pbs.twimg.com/profile_images/1350007502214209537/c7VRgZ_w_400x400.jpg",
  },
];
const categories=[
  {lable:"Furniture",value:1},
  {lable:"Clothing",value:2},
  {lable:"Cameras",value:3},
]

// product data functions
export const getItem = () => itemData;
export const getItemById = (id) => itemData.find((item) => item.id == id);

// profile Data functions
export const getProfileData = () => profileDetailData;
export const getProfileDataByID = (id) =>
  profileDetailData.find(profile=>profile.id == id);

  // category Data Function
  export const getAllCategory=()=>categories;
