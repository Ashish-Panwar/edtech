import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type CourseModel = runtime.Types.Result.DefaultSelection<Prisma.$CoursePayload>;
export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null;
    _avg: CourseAvgAggregateOutputType | null;
    _sum: CourseSumAggregateOutputType | null;
    _min: CourseMinAggregateOutputType | null;
    _max: CourseMaxAggregateOutputType | null;
};
export type CourseAvgAggregateOutputType = {
    price: runtime.Decimal | null;
};
export type CourseSumAggregateOutputType = {
    price: runtime.Decimal | null;
};
export type CourseMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    slug: string | null;
    exam: string | null;
    description: string | null;
    duration: string | null;
    mode: string | null;
    price: runtime.Decimal | null;
    image: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CourseMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    slug: string | null;
    exam: string | null;
    description: string | null;
    duration: string | null;
    mode: string | null;
    price: runtime.Decimal | null;
    image: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CourseCountAggregateOutputType = {
    id: number;
    title: number;
    slug: number;
    exam: number;
    description: number;
    duration: number;
    mode: number;
    price: number;
    highlights: number;
    image: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CourseAvgAggregateInputType = {
    price?: true;
};
export type CourseSumAggregateInputType = {
    price?: true;
};
export type CourseMinAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    exam?: true;
    description?: true;
    duration?: true;
    mode?: true;
    price?: true;
    image?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CourseMaxAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    exam?: true;
    description?: true;
    duration?: true;
    mode?: true;
    price?: true;
    image?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CourseCountAggregateInputType = {
    id?: true;
    title?: true;
    slug?: true;
    exam?: true;
    description?: true;
    duration?: true;
    mode?: true;
    price?: true;
    highlights?: true;
    image?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CourseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithRelationInput | Prisma.CourseOrderByWithRelationInput[];
    cursor?: Prisma.CourseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CourseCountAggregateInputType;
    _avg?: CourseAvgAggregateInputType;
    _sum?: CourseSumAggregateInputType;
    _min?: CourseMinAggregateInputType;
    _max?: CourseMaxAggregateInputType;
};
export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
    [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCourse[P]> : Prisma.GetScalarType<T[P], AggregateCourse[P]>;
};
export type CourseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithAggregationInput | Prisma.CourseOrderByWithAggregationInput[];
    by: Prisma.CourseScalarFieldEnum[] | Prisma.CourseScalarFieldEnum;
    having?: Prisma.CourseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CourseCountAggregateInputType | true;
    _avg?: CourseAvgAggregateInputType;
    _sum?: CourseSumAggregateInputType;
    _min?: CourseMinAggregateInputType;
    _max?: CourseMaxAggregateInputType;
};
export type CourseGroupByOutputType = {
    id: string;
    title: string;
    slug: string;
    exam: string;
    description: string | null;
    duration: string | null;
    mode: string | null;
    price: runtime.Decimal | null;
    highlights: string[];
    image: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: CourseCountAggregateOutputType | null;
    _avg: CourseAvgAggregateOutputType | null;
    _sum: CourseSumAggregateOutputType | null;
    _min: CourseMinAggregateOutputType | null;
    _max: CourseMaxAggregateOutputType | null;
};
export type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CourseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CourseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CourseGroupByOutputType[P]>;
}>>;
export type CourseWhereInput = {
    AND?: Prisma.CourseWhereInput | Prisma.CourseWhereInput[];
    OR?: Prisma.CourseWhereInput[];
    NOT?: Prisma.CourseWhereInput | Prisma.CourseWhereInput[];
    id?: Prisma.UuidFilter<"Course"> | string;
    title?: Prisma.StringFilter<"Course"> | string;
    slug?: Prisma.StringFilter<"Course"> | string;
    exam?: Prisma.StringFilter<"Course"> | string;
    description?: Prisma.StringNullableFilter<"Course"> | string | null;
    duration?: Prisma.StringNullableFilter<"Course"> | string | null;
    mode?: Prisma.StringNullableFilter<"Course"> | string | null;
    price?: Prisma.DecimalNullableFilter<"Course"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    highlights?: Prisma.StringNullableListFilter<"Course">;
    image?: Prisma.StringNullableFilter<"Course"> | string | null;
    isActive?: Prisma.BoolFilter<"Course"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Course"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Course"> | Date | string;
};
export type CourseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    exam?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    duration?: Prisma.SortOrderInput | Prisma.SortOrder;
    mode?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrderInput | Prisma.SortOrder;
    highlights?: Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.CourseWhereInput | Prisma.CourseWhereInput[];
    OR?: Prisma.CourseWhereInput[];
    NOT?: Prisma.CourseWhereInput | Prisma.CourseWhereInput[];
    title?: Prisma.StringFilter<"Course"> | string;
    exam?: Prisma.StringFilter<"Course"> | string;
    description?: Prisma.StringNullableFilter<"Course"> | string | null;
    duration?: Prisma.StringNullableFilter<"Course"> | string | null;
    mode?: Prisma.StringNullableFilter<"Course"> | string | null;
    price?: Prisma.DecimalNullableFilter<"Course"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    highlights?: Prisma.StringNullableListFilter<"Course">;
    image?: Prisma.StringNullableFilter<"Course"> | string | null;
    isActive?: Prisma.BoolFilter<"Course"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Course"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Course"> | Date | string;
}, "id" | "slug">;
export type CourseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    exam?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    duration?: Prisma.SortOrderInput | Prisma.SortOrder;
    mode?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrderInput | Prisma.SortOrder;
    highlights?: Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CourseCountOrderByAggregateInput;
    _avg?: Prisma.CourseAvgOrderByAggregateInput;
    _max?: Prisma.CourseMaxOrderByAggregateInput;
    _min?: Prisma.CourseMinOrderByAggregateInput;
    _sum?: Prisma.CourseSumOrderByAggregateInput;
};
export type CourseScalarWhereWithAggregatesInput = {
    AND?: Prisma.CourseScalarWhereWithAggregatesInput | Prisma.CourseScalarWhereWithAggregatesInput[];
    OR?: Prisma.CourseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CourseScalarWhereWithAggregatesInput | Prisma.CourseScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Course"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Course"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Course"> | string;
    exam?: Prisma.StringWithAggregatesFilter<"Course"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Course"> | string | null;
    duration?: Prisma.StringNullableWithAggregatesFilter<"Course"> | string | null;
    mode?: Prisma.StringNullableWithAggregatesFilter<"Course"> | string | null;
    price?: Prisma.DecimalNullableWithAggregatesFilter<"Course"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    highlights?: Prisma.StringNullableListFilter<"Course">;
    image?: Prisma.StringNullableWithAggregatesFilter<"Course"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"Course"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Course"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Course"> | Date | string;
};
export type CourseCreateInput = {
    id?: string;
    title: string;
    slug: string;
    exam: string;
    description?: string | null;
    duration?: string | null;
    mode?: string | null;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    highlights?: Prisma.CourseCreatehighlightsInput | string[];
    image?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CourseUncheckedCreateInput = {
    id?: string;
    title: string;
    slug: string;
    exam: string;
    description?: string | null;
    duration?: string | null;
    mode?: string | null;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    highlights?: Prisma.CourseCreatehighlightsInput | string[];
    image?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CourseUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    exam?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    highlights?: Prisma.CourseUpdatehighlightsInput | string[];
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    exam?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    highlights?: Prisma.CourseUpdatehighlightsInput | string[];
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseCreateManyInput = {
    id?: string;
    title: string;
    slug: string;
    exam: string;
    description?: string | null;
    duration?: string | null;
    mode?: string | null;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    highlights?: Prisma.CourseCreatehighlightsInput | string[];
    image?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CourseUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    exam?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    highlights?: Prisma.CourseUpdatehighlightsInput | string[];
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    exam?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    highlights?: Prisma.CourseUpdatehighlightsInput | string[];
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type CourseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    exam?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    mode?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    highlights?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CourseAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
};
export type CourseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    exam?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    mode?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CourseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    exam?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    mode?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CourseSumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
};
export type CourseCreatehighlightsInput = {
    set: string[];
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type CourseUpdatehighlightsInput = {
    set?: string[];
    push?: string | string[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type CourseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    exam?: boolean;
    description?: boolean;
    duration?: boolean;
    mode?: boolean;
    price?: boolean;
    highlights?: boolean;
    image?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["course"]>;
export type CourseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    exam?: boolean;
    description?: boolean;
    duration?: boolean;
    mode?: boolean;
    price?: boolean;
    highlights?: boolean;
    image?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["course"]>;
export type CourseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    exam?: boolean;
    description?: boolean;
    duration?: boolean;
    mode?: boolean;
    price?: boolean;
    highlights?: boolean;
    image?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["course"]>;
export type CourseSelectScalar = {
    id?: boolean;
    title?: boolean;
    slug?: boolean;
    exam?: boolean;
    description?: boolean;
    duration?: boolean;
    mode?: boolean;
    price?: boolean;
    highlights?: boolean;
    image?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CourseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "slug" | "exam" | "description" | "duration" | "mode" | "price" | "highlights" | "image" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>;
export type $CoursePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Course";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        slug: string;
        exam: string;
        description: string | null;
        duration: string | null;
        mode: string | null;
        price: runtime.Decimal | null;
        highlights: string[];
        image: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["course"]>;
    composites: {};
};
export type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CoursePayload, S>;
export type CourseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CourseCountAggregateInputType | true;
};
export interface CourseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Course'];
        meta: {
            name: 'Course';
        };
    };
    findUnique<T extends CourseFindUniqueArgs>(args: Prisma.SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CourseFindFirstArgs>(args?: Prisma.SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CourseFindManyArgs>(args?: Prisma.SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CourseCreateArgs>(args: Prisma.SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CourseCreateManyArgs>(args?: Prisma.SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CourseDeleteArgs>(args: Prisma.SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CourseUpdateArgs>(args: Prisma.SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CourseDeleteManyArgs>(args?: Prisma.SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CourseUpdateManyArgs>(args: Prisma.SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CourseUpsertArgs>(args: Prisma.SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CourseCountArgs>(args?: Prisma.Subset<T, CourseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CourseCountAggregateOutputType> : number>;
    aggregate<T extends CourseAggregateArgs>(args: Prisma.Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>;
    groupBy<T extends CourseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CourseGroupByArgs['orderBy'];
    } : {
        orderBy?: CourseGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CourseFieldRefs;
}
export interface Prisma__CourseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CourseFieldRefs {
    readonly id: Prisma.FieldRef<"Course", 'String'>;
    readonly title: Prisma.FieldRef<"Course", 'String'>;
    readonly slug: Prisma.FieldRef<"Course", 'String'>;
    readonly exam: Prisma.FieldRef<"Course", 'String'>;
    readonly description: Prisma.FieldRef<"Course", 'String'>;
    readonly duration: Prisma.FieldRef<"Course", 'String'>;
    readonly mode: Prisma.FieldRef<"Course", 'String'>;
    readonly price: Prisma.FieldRef<"Course", 'Decimal'>;
    readonly highlights: Prisma.FieldRef<"Course", 'String[]'>;
    readonly image: Prisma.FieldRef<"Course", 'String'>;
    readonly isActive: Prisma.FieldRef<"Course", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Course", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Course", 'DateTime'>;
}
export type CourseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    where: Prisma.CourseWhereUniqueInput;
};
export type CourseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    where: Prisma.CourseWhereUniqueInput;
};
export type CourseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithRelationInput | Prisma.CourseOrderByWithRelationInput[];
    cursor?: Prisma.CourseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourseScalarFieldEnum | Prisma.CourseScalarFieldEnum[];
};
export type CourseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithRelationInput | Prisma.CourseOrderByWithRelationInput[];
    cursor?: Prisma.CourseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourseScalarFieldEnum | Prisma.CourseScalarFieldEnum[];
};
export type CourseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithRelationInput | Prisma.CourseOrderByWithRelationInput[];
    cursor?: Prisma.CourseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourseScalarFieldEnum | Prisma.CourseScalarFieldEnum[];
};
export type CourseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourseCreateInput, Prisma.CourseUncheckedCreateInput>;
};
export type CourseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CourseCreateManyInput | Prisma.CourseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CourseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    data: Prisma.CourseCreateManyInput | Prisma.CourseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CourseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourseUpdateInput, Prisma.CourseUncheckedUpdateInput>;
    where: Prisma.CourseWhereUniqueInput;
};
export type CourseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CourseUpdateManyMutationInput, Prisma.CourseUncheckedUpdateManyInput>;
    where?: Prisma.CourseWhereInput;
    limit?: number;
};
export type CourseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CourseUpdateManyMutationInput, Prisma.CourseUncheckedUpdateManyInput>;
    where?: Prisma.CourseWhereInput;
    limit?: number;
};
export type CourseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    where: Prisma.CourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseCreateInput, Prisma.CourseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CourseUpdateInput, Prisma.CourseUncheckedUpdateInput>;
};
export type CourseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    where: Prisma.CourseWhereUniqueInput;
};
export type CourseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseWhereInput;
    limit?: number;
};
export type CourseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CourseSelect<ExtArgs> | null;
    omit?: Prisma.CourseOmit<ExtArgs> | null;
};
