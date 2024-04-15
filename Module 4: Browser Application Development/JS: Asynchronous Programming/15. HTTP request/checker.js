// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход ссылку на страницу какого-то сайта, загружает содержимое этой страницы, 
// извлекает из него ссылки и проверяет их доступность. Функция должна вернуть список битых ссылок.


import { URL } from 'url';
import axios from 'axios';

const extractLinks = (content) => {
  const host = 'http://localhost:8080';
  const linkRx = /href="(.+?)"/ig;
  const results = content.matchAll(linkRx);
  return Array.from(results).map((r) => r[1])
    .map((rawLink) => new URL(rawLink, host).toString());
};

const getBadLinks = async (url) => {
  const response = await axios.get(url);
  const links = extractLinks(response.data);
  const fn = (link) => axios.get(link).then(() => null).catch(() => link);
  const mapped = await Promise.all(links.map(fn));
  return mapped.filter((badUrl) => badUrl !== null);
};
export default getBadLinks;