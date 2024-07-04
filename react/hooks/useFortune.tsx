type CookieType = {
  CookieFortune: string
}

export const useFortune = () => {
  const fetchFortuneData = async () => {
    const fortuneData = fetch("/api/dataentities/CF/search?_fields=CookieFortune", {
      method: "GET",
      redirect: "follow"
    })
      .then((response) => response.json())
      .then((result) => result as CookieType[])
      .catch((error) => console.error(error));

    return fortuneData
  }

  const getFortuneNumber = (): string => {
    const getRandomDigit = () => Math.floor(Math.random() * 10);

    const slice1 = `${getRandomDigit()}${getRandomDigit()}`;
    const slice2 = `${getRandomDigit()}${getRandomDigit()}`;
    const slice3 = `${getRandomDigit()}${getRandomDigit()}${getRandomDigit()}${getRandomDigit()}`;

    const fortuneNumber = `${slice1}-${slice2}-${slice3}`

    return fortuneNumber;
  }

  const getRandomCookie = (cookies: CookieType[]) => {
    const total = cookies.length
    const randomPosition = Math.floor(Math.random() * total)
    const randomCookie = cookies[randomPosition].CookieFortune

    return randomCookie
  }

  return {
    fetchFortuneData,
    getFortuneNumber,
    getRandomCookie
  }
}