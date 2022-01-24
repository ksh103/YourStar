import React from 'react';
import ScheduleCard from './ScheduleCard';
const datas = [
  { id: 1, poster: '사진', title: '김다미1 팬미팅', date: '2022/02/02 2pm' },
  { id: 2, poster: '사진', title: '김다미2 팬미팅', date: '2022/02/02 2pm' },
  { id: 3, poster: '사진', title: '김다미3 팬미팅', date: '2022/02/02 2pm' },
  { id: 4, poster: '사진', title: '김다미4 팬미팅', date: '2022/02/02 2pm' },
];
export default function ScheduleList() {
  return (
    <>
      {datas.map(item => (
        <ScheduleCard key={item.id} data={item} />
      ))}
    </>
  );
}
