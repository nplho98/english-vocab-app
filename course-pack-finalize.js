// 所有分批課程包載入後，固定依 Day 排序。
COURSE_PACK.sort((a, b) => a.day - b.day);
finalizeCourseVocabulary();
