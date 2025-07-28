'use client';

import ReservationModal from '@/features/activityId/components/reservation-modal';
import { pageData } from '@/features/activityId/libs/mockPageData';
import { useCalendarStore } from '@/shared/libs/stores/useCalendarStore';

// TODO
// 🐛 1.  calendar-for-form에서 클릭 시 id 저장하는 코드 제거하기 O
// 2. 시간까지 클릭하면, 날짜,시작시간,끝시간 일치하는 객체 찾는 로직으로 구현 X --> 어차피 날짜 선택지 표시하려면, 날짜 선택 시점에 관련 array로 filter해야함
// 3. isDesktop활용하여, 캘린더를 모달로 감싸서 사용 O
// * 예약신청 리퀘스트 형식
//    "scheduleId": 0,
//    "headCount": 0 - 참여 인원
// * mockData pageID = 5192

const ActivityPage = () => {
  const { date, selectedDate } = useCalendarStore();
  const schedules = pageData.schedules;

  return (
    <div className="bg-purple-100 p-[10rem]">
      <div className="text-3xl text-black">date:{date}</div>
      <div className="text-3xl text-black">selectedDate:{selectedDate}</div>
      <ReservationModal scheduleArray={schedules} />
    </div>
  );
};
export default ActivityPage;
