import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type TestimonialModel = runtime.Types.Result.DefaultSelection<Prisma.$TestimonialPayload>;
export type AggregateTestimonial = {
    _count: TestimonialCountAggregateOutputType | null;
    _avg: TestimonialAvgAggregateOutputType | null;
    _sum: TestimonialSumAggregateOutputType | null;
    _min: TestimonialMinAggregateOutputType | null;
    _max: TestimonialMaxAggregateOutputType | null;
};
export type TestimonialAvgAggregateOutputType = {
    year: number | null;
};
export type TestimonialSumAggregateOutputType = {
    year: number | null;
};
export type TestimonialMinAggregateOutputType = {
    id: string | null;
    studentName: string | null;
    exam: string | null;
    rank: string | null;
    year: number | null;
    story: string | null;
    quote: string | null;
    image: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TestimonialMaxAggregateOutputType = {
    id: string | null;
    studentName: string | null;
    exam: string | null;
    rank: string | null;
    year: number | null;
    story: string | null;
    quote: string | null;
    image: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TestimonialCountAggregateOutputType = {
    id: number;
    studentName: number;
    exam: number;
    rank: number;
    year: number;
    story: number;
    quote: number;
    image: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TestimonialAvgAggregateInputType = {
    year?: true;
};
export type TestimonialSumAggregateInputType = {
    year?: true;
};
export type TestimonialMinAggregateInputType = {
    id?: true;
    studentName?: true;
    exam?: true;
    rank?: true;
    year?: true;
    story?: true;
    quote?: true;
    image?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TestimonialMaxAggregateInputType = {
    id?: true;
    studentName?: true;
    exam?: true;
    rank?: true;
    year?: true;
    story?: true;
    quote?: true;
    image?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TestimonialCountAggregateInputType = {
    id?: true;
    studentName?: true;
    exam?: true;
    rank?: true;
    year?: true;
    story?: true;
    quote?: true;
    image?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TestimonialAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestimonialWhereInput;
    orderBy?: Prisma.TestimonialOrderByWithRelationInput | Prisma.TestimonialOrderByWithRelationInput[];
    cursor?: Prisma.TestimonialWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TestimonialCountAggregateInputType;
    _avg?: TestimonialAvgAggregateInputType;
    _sum?: TestimonialSumAggregateInputType;
    _min?: TestimonialMinAggregateInputType;
    _max?: TestimonialMaxAggregateInputType;
};
export type GetTestimonialAggregateType<T extends TestimonialAggregateArgs> = {
    [P in keyof T & keyof AggregateTestimonial]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTestimonial[P]> : Prisma.GetScalarType<T[P], AggregateTestimonial[P]>;
};
export type TestimonialGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestimonialWhereInput;
    orderBy?: Prisma.TestimonialOrderByWithAggregationInput | Prisma.TestimonialOrderByWithAggregationInput[];
    by: Prisma.TestimonialScalarFieldEnum[] | Prisma.TestimonialScalarFieldEnum;
    having?: Prisma.TestimonialScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TestimonialCountAggregateInputType | true;
    _avg?: TestimonialAvgAggregateInputType;
    _sum?: TestimonialSumAggregateInputType;
    _min?: TestimonialMinAggregateInputType;
    _max?: TestimonialMaxAggregateInputType;
};
export type TestimonialGroupByOutputType = {
    id: string;
    studentName: string;
    exam: string;
    rank: string;
    year: number | null;
    story: string | null;
    quote: string | null;
    image: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: TestimonialCountAggregateOutputType | null;
    _avg: TestimonialAvgAggregateOutputType | null;
    _sum: TestimonialSumAggregateOutputType | null;
    _min: TestimonialMinAggregateOutputType | null;
    _max: TestimonialMaxAggregateOutputType | null;
};
export type GetTestimonialGroupByPayload<T extends TestimonialGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TestimonialGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TestimonialGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TestimonialGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TestimonialGroupByOutputType[P]>;
}>>;
export type TestimonialWhereInput = {
    AND?: Prisma.TestimonialWhereInput | Prisma.TestimonialWhereInput[];
    OR?: Prisma.TestimonialWhereInput[];
    NOT?: Prisma.TestimonialWhereInput | Prisma.TestimonialWhereInput[];
    id?: Prisma.UuidFilter<"Testimonial"> | string;
    studentName?: Prisma.StringFilter<"Testimonial"> | string;
    exam?: Prisma.StringFilter<"Testimonial"> | string;
    rank?: Prisma.StringFilter<"Testimonial"> | string;
    year?: Prisma.IntNullableFilter<"Testimonial"> | number | null;
    story?: Prisma.StringNullableFilter<"Testimonial"> | string | null;
    quote?: Prisma.StringNullableFilter<"Testimonial"> | string | null;
    image?: Prisma.StringNullableFilter<"Testimonial"> | string | null;
    isActive?: Prisma.BoolFilter<"Testimonial"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Testimonial"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Testimonial"> | Date | string;
};
export type TestimonialOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    studentName?: Prisma.SortOrder;
    exam?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    year?: Prisma.SortOrderInput | Prisma.SortOrder;
    story?: Prisma.SortOrderInput | Prisma.SortOrder;
    quote?: Prisma.SortOrderInput | Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TestimonialWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TestimonialWhereInput | Prisma.TestimonialWhereInput[];
    OR?: Prisma.TestimonialWhereInput[];
    NOT?: Prisma.TestimonialWhereInput | Prisma.TestimonialWhereInput[];
    studentName?: Prisma.StringFilter<"Testimonial"> | string;
    exam?: Prisma.StringFilter<"Testimonial"> | string;
    rank?: Prisma.StringFilter<"Testimonial"> | string;
    year?: Prisma.IntNullableFilter<"Testimonial"> | number | null;
    story?: Prisma.StringNullableFilter<"Testimonial"> | string | null;
    quote?: Prisma.StringNullableFilter<"Testimonial"> | string | null;
    image?: Prisma.StringNullableFilter<"Testimonial"> | string | null;
    isActive?: Prisma.BoolFilter<"Testimonial"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Testimonial"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Testimonial"> | Date | string;
}, "id">;
export type TestimonialOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    studentName?: Prisma.SortOrder;
    exam?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    year?: Prisma.SortOrderInput | Prisma.SortOrder;
    story?: Prisma.SortOrderInput | Prisma.SortOrder;
    quote?: Prisma.SortOrderInput | Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TestimonialCountOrderByAggregateInput;
    _avg?: Prisma.TestimonialAvgOrderByAggregateInput;
    _max?: Prisma.TestimonialMaxOrderByAggregateInput;
    _min?: Prisma.TestimonialMinOrderByAggregateInput;
    _sum?: Prisma.TestimonialSumOrderByAggregateInput;
};
export type TestimonialScalarWhereWithAggregatesInput = {
    AND?: Prisma.TestimonialScalarWhereWithAggregatesInput | Prisma.TestimonialScalarWhereWithAggregatesInput[];
    OR?: Prisma.TestimonialScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TestimonialScalarWhereWithAggregatesInput | Prisma.TestimonialScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Testimonial"> | string;
    studentName?: Prisma.StringWithAggregatesFilter<"Testimonial"> | string;
    exam?: Prisma.StringWithAggregatesFilter<"Testimonial"> | string;
    rank?: Prisma.StringWithAggregatesFilter<"Testimonial"> | string;
    year?: Prisma.IntNullableWithAggregatesFilter<"Testimonial"> | number | null;
    story?: Prisma.StringNullableWithAggregatesFilter<"Testimonial"> | string | null;
    quote?: Prisma.StringNullableWithAggregatesFilter<"Testimonial"> | string | null;
    image?: Prisma.StringNullableWithAggregatesFilter<"Testimonial"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"Testimonial"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Testimonial"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Testimonial"> | Date | string;
};
export type TestimonialCreateInput = {
    id?: string;
    studentName: string;
    exam: string;
    rank: string;
    year?: number | null;
    story?: string | null;
    quote?: string | null;
    image?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TestimonialUncheckedCreateInput = {
    id?: string;
    studentName: string;
    exam: string;
    rank: string;
    year?: number | null;
    story?: string | null;
    quote?: string | null;
    image?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TestimonialUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentName?: Prisma.StringFieldUpdateOperationsInput | string;
    exam?: Prisma.StringFieldUpdateOperationsInput | string;
    rank?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    story?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestimonialUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentName?: Prisma.StringFieldUpdateOperationsInput | string;
    exam?: Prisma.StringFieldUpdateOperationsInput | string;
    rank?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    story?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestimonialCreateManyInput = {
    id?: string;
    studentName: string;
    exam: string;
    rank: string;
    year?: number | null;
    story?: string | null;
    quote?: string | null;
    image?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TestimonialUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentName?: Prisma.StringFieldUpdateOperationsInput | string;
    exam?: Prisma.StringFieldUpdateOperationsInput | string;
    rank?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    story?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestimonialUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    studentName?: Prisma.StringFieldUpdateOperationsInput | string;
    exam?: Prisma.StringFieldUpdateOperationsInput | string;
    rank?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    story?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestimonialCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentName?: Prisma.SortOrder;
    exam?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    story?: Prisma.SortOrder;
    quote?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TestimonialAvgOrderByAggregateInput = {
    year?: Prisma.SortOrder;
};
export type TestimonialMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentName?: Prisma.SortOrder;
    exam?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    story?: Prisma.SortOrder;
    quote?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TestimonialMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentName?: Prisma.SortOrder;
    exam?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    story?: Prisma.SortOrder;
    quote?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TestimonialSumOrderByAggregateInput = {
    year?: Prisma.SortOrder;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type TestimonialSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentName?: boolean;
    exam?: boolean;
    rank?: boolean;
    year?: boolean;
    story?: boolean;
    quote?: boolean;
    image?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["testimonial"]>;
export type TestimonialSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentName?: boolean;
    exam?: boolean;
    rank?: boolean;
    year?: boolean;
    story?: boolean;
    quote?: boolean;
    image?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["testimonial"]>;
export type TestimonialSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentName?: boolean;
    exam?: boolean;
    rank?: boolean;
    year?: boolean;
    story?: boolean;
    quote?: boolean;
    image?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["testimonial"]>;
export type TestimonialSelectScalar = {
    id?: boolean;
    studentName?: boolean;
    exam?: boolean;
    rank?: boolean;
    year?: boolean;
    story?: boolean;
    quote?: boolean;
    image?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TestimonialOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "studentName" | "exam" | "rank" | "year" | "story" | "quote" | "image" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["testimonial"]>;
export type $TestimonialPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Testimonial";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        studentName: string;
        exam: string;
        rank: string;
        year: number | null;
        story: string | null;
        quote: string | null;
        image: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["testimonial"]>;
    composites: {};
};
export type TestimonialGetPayload<S extends boolean | null | undefined | TestimonialDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TestimonialPayload, S>;
export type TestimonialCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TestimonialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TestimonialCountAggregateInputType | true;
};
export interface TestimonialDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Testimonial'];
        meta: {
            name: 'Testimonial';
        };
    };
    findUnique<T extends TestimonialFindUniqueArgs>(args: Prisma.SelectSubset<T, TestimonialFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TestimonialClient<runtime.Types.Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TestimonialFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TestimonialFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TestimonialClient<runtime.Types.Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TestimonialFindFirstArgs>(args?: Prisma.SelectSubset<T, TestimonialFindFirstArgs<ExtArgs>>): Prisma.Prisma__TestimonialClient<runtime.Types.Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TestimonialFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TestimonialFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TestimonialClient<runtime.Types.Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TestimonialFindManyArgs>(args?: Prisma.SelectSubset<T, TestimonialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TestimonialCreateArgs>(args: Prisma.SelectSubset<T, TestimonialCreateArgs<ExtArgs>>): Prisma.Prisma__TestimonialClient<runtime.Types.Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TestimonialCreateManyArgs>(args?: Prisma.SelectSubset<T, TestimonialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TestimonialCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TestimonialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TestimonialDeleteArgs>(args: Prisma.SelectSubset<T, TestimonialDeleteArgs<ExtArgs>>): Prisma.Prisma__TestimonialClient<runtime.Types.Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TestimonialUpdateArgs>(args: Prisma.SelectSubset<T, TestimonialUpdateArgs<ExtArgs>>): Prisma.Prisma__TestimonialClient<runtime.Types.Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TestimonialDeleteManyArgs>(args?: Prisma.SelectSubset<T, TestimonialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TestimonialUpdateManyArgs>(args: Prisma.SelectSubset<T, TestimonialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TestimonialUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TestimonialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TestimonialUpsertArgs>(args: Prisma.SelectSubset<T, TestimonialUpsertArgs<ExtArgs>>): Prisma.Prisma__TestimonialClient<runtime.Types.Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TestimonialCountArgs>(args?: Prisma.Subset<T, TestimonialCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TestimonialCountAggregateOutputType> : number>;
    aggregate<T extends TestimonialAggregateArgs>(args: Prisma.Subset<T, TestimonialAggregateArgs>): Prisma.PrismaPromise<GetTestimonialAggregateType<T>>;
    groupBy<T extends TestimonialGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TestimonialGroupByArgs['orderBy'];
    } : {
        orderBy?: TestimonialGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TestimonialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestimonialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TestimonialFieldRefs;
}
export interface Prisma__TestimonialClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TestimonialFieldRefs {
    readonly id: Prisma.FieldRef<"Testimonial", 'String'>;
    readonly studentName: Prisma.FieldRef<"Testimonial", 'String'>;
    readonly exam: Prisma.FieldRef<"Testimonial", 'String'>;
    readonly rank: Prisma.FieldRef<"Testimonial", 'String'>;
    readonly year: Prisma.FieldRef<"Testimonial", 'Int'>;
    readonly story: Prisma.FieldRef<"Testimonial", 'String'>;
    readonly quote: Prisma.FieldRef<"Testimonial", 'String'>;
    readonly image: Prisma.FieldRef<"Testimonial", 'String'>;
    readonly isActive: Prisma.FieldRef<"Testimonial", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Testimonial", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Testimonial", 'DateTime'>;
}
export type TestimonialFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonialSelect<ExtArgs> | null;
    omit?: Prisma.TestimonialOmit<ExtArgs> | null;
    where: Prisma.TestimonialWhereUniqueInput;
};
export type TestimonialFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonialSelect<ExtArgs> | null;
    omit?: Prisma.TestimonialOmit<ExtArgs> | null;
    where: Prisma.TestimonialWhereUniqueInput;
};
export type TestimonialFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonialSelect<ExtArgs> | null;
    omit?: Prisma.TestimonialOmit<ExtArgs> | null;
    where?: Prisma.TestimonialWhereInput;
    orderBy?: Prisma.TestimonialOrderByWithRelationInput | Prisma.TestimonialOrderByWithRelationInput[];
    cursor?: Prisma.TestimonialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestimonialScalarFieldEnum | Prisma.TestimonialScalarFieldEnum[];
};
export type TestimonialFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonialSelect<ExtArgs> | null;
    omit?: Prisma.TestimonialOmit<ExtArgs> | null;
    where?: Prisma.TestimonialWhereInput;
    orderBy?: Prisma.TestimonialOrderByWithRelationInput | Prisma.TestimonialOrderByWithRelationInput[];
    cursor?: Prisma.TestimonialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestimonialScalarFieldEnum | Prisma.TestimonialScalarFieldEnum[];
};
export type TestimonialFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonialSelect<ExtArgs> | null;
    omit?: Prisma.TestimonialOmit<ExtArgs> | null;
    where?: Prisma.TestimonialWhereInput;
    orderBy?: Prisma.TestimonialOrderByWithRelationInput | Prisma.TestimonialOrderByWithRelationInput[];
    cursor?: Prisma.TestimonialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestimonialScalarFieldEnum | Prisma.TestimonialScalarFieldEnum[];
};
export type TestimonialCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonialSelect<ExtArgs> | null;
    omit?: Prisma.TestimonialOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestimonialCreateInput, Prisma.TestimonialUncheckedCreateInput>;
};
export type TestimonialCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TestimonialCreateManyInput | Prisma.TestimonialCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TestimonialCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonialSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TestimonialOmit<ExtArgs> | null;
    data: Prisma.TestimonialCreateManyInput | Prisma.TestimonialCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TestimonialUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonialSelect<ExtArgs> | null;
    omit?: Prisma.TestimonialOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestimonialUpdateInput, Prisma.TestimonialUncheckedUpdateInput>;
    where: Prisma.TestimonialWhereUniqueInput;
};
export type TestimonialUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TestimonialUpdateManyMutationInput, Prisma.TestimonialUncheckedUpdateManyInput>;
    where?: Prisma.TestimonialWhereInput;
    limit?: number;
};
export type TestimonialUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonialSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TestimonialOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestimonialUpdateManyMutationInput, Prisma.TestimonialUncheckedUpdateManyInput>;
    where?: Prisma.TestimonialWhereInput;
    limit?: number;
};
export type TestimonialUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonialSelect<ExtArgs> | null;
    omit?: Prisma.TestimonialOmit<ExtArgs> | null;
    where: Prisma.TestimonialWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestimonialCreateInput, Prisma.TestimonialUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TestimonialUpdateInput, Prisma.TestimonialUncheckedUpdateInput>;
};
export type TestimonialDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonialSelect<ExtArgs> | null;
    omit?: Prisma.TestimonialOmit<ExtArgs> | null;
    where: Prisma.TestimonialWhereUniqueInput;
};
export type TestimonialDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestimonialWhereInput;
    limit?: number;
};
export type TestimonialDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestimonialSelect<ExtArgs> | null;
    omit?: Prisma.TestimonialOmit<ExtArgs> | null;
};
