// Chia lai 598 tu HSK4 thanh cac bai theo CHU DE (thay vi giu nguyen thu tu
// bang chu cai nhu trong hsk4.js), giup bai hoc mach lac va de nho hon, tuong
// tu cach lam voi HSK1 (xem lessonPlans.js). Vi tu vung HSK4 tru tuong va da
// dang hon nhieu so voi HSK1, mot so bai la "tong hop" cho cac tu kho xep
// chung chu de ro rang. Danh sach wordIds duoc doi chieu thu cong voi
// HSK4_WORDS (id 3001-3598) bang script Node de dam bao dung 598 tu, moi tu
// xuat hien dung 1 lan, khong thieu khong trung.
export const HSK4_LESSON_PLAN = [
  {
    title: 'Cảm xúc tích cực',
    intro: 'Diễn tả niềm vui, sự xúc động, hào hứng và những cảm xúc dễ chịu.',
    wordIds: [3001, 3125, 3189, 3265, 3335, 3475, 3476, 3523, 3519, 3508]
  },
  {
    title: 'Cảm xúc tiêu cực 1',
    intro: 'Những cảm giác khó chịu như ngạc nhiên, phiền muộn, xấu hổ, hối hận.',
    wordIds: [3047, 3081, 3103, 3143, 3163, 3174, 3223]
  },
  {
    title: 'Cảm xúc tiêu cực 2',
    intro: 'Nỗi buồn, sự thất vọng, chán ghét và áp lực tâm lý.',
    wordIds: [3250, 3300, 3361, 3373, 3422, 3450, 3482]
  },
  {
    title: 'Tâm lý & niềm tin',
    intro: 'Sự nghi ngờ, tin tưởng, đồng cảm và những gì diễn ra trong tâm trí.',
    wordIds: [3180, 3470, 3471, 3452, 3433, 3459, 3181, 3468, 3292]
  },
  {
    title: 'Tính cách tốt',
    intro: 'Những đức tính đáng quý: chân thật, kiên trì, dũng cảm, hài hước.',
    wordIds: [3045, 3183, 3205, 3298, 3512, 3514, 3515, 3550, 3585, 3576]
  },
  {
    title: 'Tính cách & thói quen chưa tốt',
    intro: 'Những nét tính cách tiêu cực như lười biếng, cẩu thả, kiêu ngạo.',
    wordIds: [3016, 3056, 3214, 3261, 3288, 3286, 3410, 3146, 3316, 3306]
  },
  {
    title: 'Gia đình & quan hệ xã hội',
    intro: 'Người thân, bạn bè và các mối quan hệ gắn bó trong cuộc sống.',
    wordIds: [3119, 3296, 3333, 3412, 3521, 3520, 3178, 3311, 3495, 3533, 3537]
  },
  {
    title: 'Giao tiếp lịch sự & xã giao',
    intro: 'Cách xin lỗi, cảm ơn, khen ngợi, chúc mừng và cư xử lịch thiệp.',
    wordIds: [3013, 3078, 3128, 3059, 3023, 3578, 3594, 3535, 3530, 3238]
  },
  {
    title: 'Sức khỏe & cơ thể',
    intro: 'Khám bệnh, triệu chứng và các bộ phận cơ thể thường gặp.',
    wordIds: [3062, 3063, 3161, 3165, 3179, 3206, 3313, 3405, 3481, 3089, 3591]
  },
  {
    title: 'Nghề nghiệp & trách nhiệm',
    intro: 'Tên gọi các nghề nghiệp và từ vựng về trách nhiệm trong công việc.',
    wordIds: [3195, 3216, 3232, 3285, 3374, 3394, 3491, 3561, 3546, 3120, 3540]
  },
  {
    title: 'Công việc văn phòng',
    intro: 'Những việc thường ngày ở công sở: sắp xếp, đăng ký, in ấn, nghỉ phép.',
    wordIds: [3002, 3011, 3052, 3060, 3121, 3200, 3209, 3337, 3049, 3137, 3388]
  },
  {
    title: 'Kinh doanh & kinh tế',
    intro: 'Thành công, quản lý, cạnh tranh và các khái niệm kinh tế cơ bản.',
    wordIds: [3042, 3151, 3154, 3227, 3233, 3383, 3598, 3067, 3237, 3009]
  },
  {
    title: 'Kinh tế, kỹ thuật & chất lượng',
    intro: 'Sản xuất, công nghệ, tiêu chuẩn chất lượng và tăng trưởng kinh tế.',
    wordIds: [3243, 3017, 3440, 3196, 3567, 3568, 3020, 3170, 3406, 3541, 3542, 3581]
  },
  {
    title: 'Mua sắm & tiền bạc',
    intro: 'Giá cả, giảm giá, thu nhập và các từ vựng liên quan đến tiền.',
    wordIds: [3061, 3140, 3204, 3294, 3350, 3472, 3502, 3588, 3560, 3141, 3147]
  },
  {
    title: 'Giáo dục & bằng cấp',
    intro: 'Trường lớp, các kỳ nghỉ và những tấm bằng từ đại học đến tiến sĩ.',
    wordIds: [3018, 3026, 3112, 3164, 3217, 3284, 3404, 3488, 3580, 3579]
  },
  {
    title: 'Học tập & kiến thức',
    intro: 'Việc học bài, tích lũy kiến thức và thái độ học tập tích cực.',
    wordIds: [3528, 3057, 3427, 3054, 3188, 3187, 3186, 3558, 3303, 3229]
  },
  {
    title: 'Ngôn ngữ & diễn đạt',
    intro: 'Biểu đạt ý tưởng, dịch thuật, ngữ pháp và các văn bản chữ viết.',
    wordIds: [3021, 3102, 3281, 3403, 3221, 3526, 3527, 3569, 3092, 3446, 3499, 3534]
  },
  {
    title: 'Truyền thông & nghệ thuật',
    intro: 'Tin tức, biểu diễn nghệ thuật và những tác phẩm nổi tiếng.',
    wordIds: [3010, 3153, 3230, 3464, 3465, 3490, 3503, 3226, 3547, 3595, 3467]
  },
  {
    title: 'Pháp luật & xã hội',
    intro: 'Luật pháp, quy định và các vấn đề chung của cộng đồng, xã hội.',
    wordIds: [3084, 3101, 3156, 3225, 3364, 3157, 3295, 3555, 3104]
  },
  {
    title: 'Thiên nhiên & môi trường',
    intro: 'Trái đất, đại dương, rừng và việc bảo vệ môi trường sống.',
    wordIds: [3079, 3152, 3162, 3184, 3249, 3448, 3586, 3359, 3008]
  },
  {
    title: 'Thời tiết & khí hậu',
    intro: 'Nắng, tối, ấm, mát và những từ miêu tả thời tiết, khí hậu.',
    wordIds: [3277, 3006, 3307, 3276, 3376, 3445, 3326, 3492, 3443]
  },
  {
    title: 'Động vật & thực vật',
    intro: 'Tên một số con vật, cây cối quen thuộc trong tự nhiên.',
    wordIds: [3173, 3264, 3375, 3574, 3498, 3562, 3095, 3244, 3347]
  },
  {
    title: 'Đồ dùng gia đình',
    intro: 'Những vật dụng quen thuộc trong nhà như hộp, chai, gương, tủ.',
    wordIds: [3053, 3172, 3235, 3290, 3319, 3360, 3407, 3437, 3454, 3202, 3483, 3496, 3256]
  },
  {
    title: 'Tính từ mô tả vật',
    intro: 'Mô tả trạng thái vật lý của đồ vật: dày mỏng, cứng mềm, vỡ gãy.',
    wordIds: [3176, 3252, 3543, 3334, 3510, 3357, 3320, 3090, 3532]
  },
  {
    title: 'Ngoại hình, tuổi tác & giới tính',
    intro: 'Miêu tả dáng vẻ bên ngoài, độ tuổi và giới tính của một người.',
    wordIds: [3399, 3291, 3134, 3058, 3494, 3477, 3304, 3096]
  },
  {
    title: 'Động từ hành động 1',
    intro: 'Những động tác tay chân thường gặp: ôm, kéo, treo, ném, lau.',
    wordIds: [3012, 3033, 3038, 3069, 3148, 3211, 3257, 3330, 3341, 3353]
  },
  {
    title: 'Động từ hành động 2',
    intro: 'Các động tác khác trong đời sống: đi dạo, đẩy, nâng, sửa chữa.',
    wordIds: [3358, 3387, 3409, 3415, 3419, 3434, 3436, 3479, 3565]
  },
  {
    title: 'Động từ trừu tượng: thay đổi & phát triển',
    intro: 'Những động từ diễn tả sự thay đổi, cải thiện hoặc mở rộng theo thời gian.',
    wordIds: [3040, 3068, 3124, 3185, 3210, 3255, 3401, 3458, 3506, 3575]
  },
  {
    title: 'Động từ trừu tượng: suy nghĩ & phán đoán',
    intro: 'Các động từ về tư duy, cân nhắc, phán đoán và tổng kết vấn đề.',
    wordIds: [3105, 3142, 3241, 3242, 3268, 3310, 3340, 3421, 3549, 3587]
  },
  {
    title: 'Động từ trừu tượng: hành động & tổ chức',
    intro: 'Diễn tả việc bao gồm, tiếp nhận, tập hợp và tiến hành công việc.',
    wordIds: [3007, 3111, 3118, 3149, 3193, 3198, 3218, 3224, 3386, 3385]
  },
  {
    title: 'Động từ trừu tượng: cung cấp & hỗ trợ',
    intro: 'Cung cấp, nhắc nhở, thông báo và những kết quả, hiệu quả đạt được.',
    wordIds: [3220, 3424, 3426, 3429, 3431, 3432, 3453, 3466, 3493, 3557]
  },
  {
    title: 'Danh từ, động từ trừu tượng: phương pháp & khái niệm',
    intro: 'Phạm vi, phương pháp, phương diện và các khái niệm trừu tượng khác.',
    wordIds: [3106, 3107, 3108, 3559, 3563, 3571, 3583, 3589, 3590, 3346]
  },
  {
    title: 'Liên từ: nguyên nhân, kết quả',
    intro: 'Các từ nối chỉ nguyên nhân, kết quả như "vì vậy", "do đó", "quả nhiên".',
    wordIds: [3505, 3517, 3518, 3522, 3272, 3299, 3236, 3077, 3158]
  },
  {
    title: 'Liên từ: tăng tiến, liệt kê',
    intro: 'Cấu trúc "không những... mà còn", liệt kê và sắp xếp thứ tự ý.',
    wordIds: [3025, 3027, 3031, 3097, 3279, 3322, 3323, 3391, 3516]
  },
  {
    title: 'Liên từ: tương phản',
    intro: 'Các từ nối chỉ sự tương phản như "nhưng", "tuy nhiên", "theo".',
    wordIds: [3030, 3246, 3345, 3348, 3005, 3117, 3274, 3327]
  },
  {
    title: 'Liên từ, trợ từ & câu phức',
    intro: 'Cấu trúc câu phức: điều kiện, nhượng bộ và các trợ từ ngữ pháp.',
    wordIds: [3028, 3029, 3191, 3197, 3222, 3351, 3411, 3451, 3564, 3566, 3556, 3485, 3524]
  },
  {
    title: 'Trạng từ mức độ & thời gian 1',
    intro: 'Các trạng từ chỉ mức độ, thời điểm như "vốn dĩ", "đột nhiên", "khoảng chừng".',
    wordIds: [3015, 3037, 3055, 3064, 3066, 3132, 3168, 3177, 3190, 3192, 3234]
  },
  {
    title: 'Trạng từ mức độ & thời gian 2',
    intro: 'Thêm các trạng từ chỉ mức độ, tần suất như "rất", "vẫn", "tạm thời".',
    wordIds: [3248, 3354, 3363, 3377, 3379, 3430, 3442, 3511, 3529, 3538, 3552]
  },
  {
    title: 'Lượng từ & số đếm 1',
    intro: 'Các lượng từ đi kèm danh từ và cách diễn đạt số lần, phân số.',
    wordIds: [3014, 3019, 3039, 3094, 3113, 3114, 3135, 3138, 3273]
  },
  {
    title: 'Lượng từ & số đếm 2',
    intro: 'Thêm các lượng từ và từ chỉ số lượng, toàn bộ, tất cả.',
    wordIds: [3315, 3342, 3397, 3398, 3413, 3414, 3420, 3480, 3500]
  },
  {
    title: 'Thời gian & trình tự',
    intro: 'Diễn đạt lúc đó, sau đó, cuối cùng và việc kịp hay không kịp thời gian.',
    wordIds: [3004, 3073, 3175, 3593, 3584, 3159, 3325, 3082, 3259, 3260]
  },
  {
    title: 'Du lịch & giao thông 1',
    intro: 'Chuyến bay, visa, tắc đường và các từ vựng khi đi du lịch xa.',
    wordIds: [3046, 3050, 3075, 3088, 3166, 3324, 3328, 3201, 3239]
  },
  {
    title: 'Du lịch & giao thông 2, địa điểm',
    intro: 'Các địa điểm, phương hướng và công trình thường gặp khi di chuyển.',
    wordIds: [3072, 3356, 3390, 3441, 3573, 3596, 3597, 3109, 3076, 3065, 3329, 3331]
  },
  {
    title: 'Thể thao & giải trí',
    intro: 'Các môn thể thao, trò chuyện và hoạt động giải trí thường ngày.',
    wordIds: [3317, 3439, 3525, 3155, 3278, 3145, 3150, 3070, 3130]
  },
  {
    title: 'Ẩm thực & mùi vị',
    intro: 'Các món ăn, đồ uống và những từ miêu tả mùi vị như cay, chua, mặn.',
    wordIds: [3024, 3215, 3332, 3380, 3418, 3444, 3251, 3258, 3408, 3456, 3461, 3507, 3455]
  },
  {
    title: 'Tính từ trừu tượng 1',
    intro: 'Mô tả tính chất chung: an toàn, phức tạp, giàu có, khô ráo, phổ biến.',
    wordIds: [3003, 3122, 3123, 3133, 3129, 3131, 3289, 3321, 3339, 3366, 3457]
  },
  {
    title: 'Tính từ trừu tượng 2',
    intro: 'Thêm các tính từ trừu tượng như chính xác, chính thức, thực tế, trái ngược.',
    wordIds: [3460, 3462, 3378, 3553, 3554, 3551, 3548, 3091, 3271, 3487]
  },
  {
    title: 'Cảm xúc & không khí',
    intro: 'Cảm giác, tình cảm và bầu không khí xung quanh: náo nhiệt, ồn ào, lãng mạn.',
    wordIds: [3127, 3126, 3263, 3245, 3247, 3349, 3253, 3231, 3469, 3041]
  },
  {
    title: 'Tính cách & thái độ',
    intro: 'Tính tình, thái độ sống và cách ứng xử qua khen chê, khích lệ.',
    wordIds: [3314, 3478, 3486, 3266, 3416, 3312, 3144, 3338, 3287, 3372]
  },
  {
    title: 'Sự việc & hành động đời sống',
    intro: 'Những việc xảy ra trong đời: sinh ra, trưởng thành, trở thành, va chạm.',
    wordIds: [3034, 3036, 3043, 3044, 3048, 3051, 3071, 3085, 3086, 3087, 3582]
  },
  {
    title: 'Vị trí, địa điểm & địa danh',
    intro: 'Các vị trí, vùng miền và một vài địa danh nổi tiếng của Trung Quốc.',
    wordIds: [3093, 3301, 3080, 3083, 3305, 3544, 3545, 3484, 3213]
  },
  {
    title: 'Kế hoạch, công cụ & tổ chức công việc',
    intro: 'Lập kế hoạch, chuẩn bị giấy tờ, công cụ và duy trì liên hệ công việc.',
    wordIds: [3022, 3032, 3136, 3194, 3212, 3219, 3228, 3275, 3309, 3389, 3572]
  },
  {
    title: 'Cuộc sống & tình trạng chung',
    intro: 'Cuộc sống, tương lai, tình hình và những điều kiện, đặc điểm đi kèm.',
    wordIds: [3182, 3208, 3336, 3368, 3369, 3392, 3393, 3423, 3428, 3402]
  },
  {
    title: 'Kết quả, thành bại & nhiệm vụ',
    intro: 'Thắng thua, ưu khuyết điểm, nhiệm vụ và nguyên nhân dẫn đến kết quả.',
    wordIds: [3395, 3509, 3513, 3343, 3344, 3352, 3355, 3371, 3370, 3531]
  },
  {
    title: 'Giao tiếp & trao đổi ý kiến',
    intro: 'Thăm hỏi, bàn bạc, trì hoãn và trao đổi ý kiến qua lại giữa mọi người.',
    wordIds: [3110, 3240, 3362, 3417, 3425, 3435, 3447, 3536, 3577, 3504]
  },
  {
    title: 'Trạng từ & động từ thông dụng bổ sung',
    intro: 'Một số trạng từ và động từ thông dụng khác: hoàn toàn, sử dụng, thử.',
    wordIds: [3400, 3438, 3449, 3497, 3501, 3592, 3473, 3381, 3384, 3160]
  },
  {
    title: 'Sinh hoạt hằng ngày & đồ vật bổ sung',
    intro: 'Một số đồ vật và việc vặt hằng ngày: cắt tóc, gửi thư, giữ vệ sinh.',
    wordIds: [3474, 3539, 3074, 3199, 3293, 3267, 3270, 3463, 3167, 3169]
  },
  {
    title: 'Tổng hợp: phát triển & sự việc',
    intro: 'Các từ về sự phát triển, khó khăn và mục đích không thuộc nhóm nào khác.',
    wordIds: [3098, 3099, 3100, 3115, 3116, 3035, 3203, 3207, 3254, 3262, 3269, 3297, 3570]
  },
  {
    title: 'Tổng hợp: trạng thái & sinh hoạt',
    intro: 'Các từ lẻ còn lại về trạng thái quen thuộc, thịnh hành và sinh hoạt chung.',
    wordIds: [3139, 3171, 3280, 3282, 3283, 3302, 3308, 3318, 3365, 3367, 3382, 3396, 3489]
  }
]
