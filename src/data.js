export const tutorialApi = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutorals`);
  
  const data = await res.json();
  return data || [];
};

export const AvailabletutorialApi = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/availabletutorials`);
  const data = await res.json();
  return data || [];
};

export const tutorialDetailsApi = async (id, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutorals/${id}`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data || null;
};