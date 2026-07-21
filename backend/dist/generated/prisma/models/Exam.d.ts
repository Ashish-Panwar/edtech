import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ExamModel = runtime.Types.Result.DefaultSelection<Prisma.$ExamPayload>;
export type AggregateExam = {
    _count: ExamCountAggregateOutputType | null;
    _avg: ExamAvgAggregateOutputType | null;
    _sum: ExamSumAggregateOutputType | null;
    _min: ExamMinAggregateOutputType | null;
    _max: ExamMaxAggregateOutputType | null;
};
export type ExamAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type ExamSumAggregateOutputType = {
    sortOrder: number | null;
};
export type ExamMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    fullName: string | null;
    description: string | null;
    icon: string | null;
    href: string | null;
    gradient: string | null;
    color: string | null;
    sortOrder: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ExamMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    fullName: string | null;
    description: string | null;
    icon: string | null;
    href: string | null;
    gradient: string | null;
    color: string | null;
    sortOrder: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ExamCountAggregateOutputType = {
    id: number;
    name: number;
    fullName: number;
    description: number;
    icon: number;
    href: number;
    gradient: number;
    color: number;
    sortOrder: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ExamAvgAggregateInputType = {
    sortOrder?: true;
};
export type ExamSumAggregateInputType = {
    sortOrder?: true;
};
export type ExamMinAggregateInputType = {
    id?: true;
    name?: true;
    fullName?: true;
    description?: true;
    icon?: true;
    href?: true;
    gradient?: true;
    color?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ExamMaxAggregateInputType = {
    id?: true;
    name?: true;
    fullName?: true;
    description?: true;
    icon?: true;
    href?: true;
    gradient?: true;
    color?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ExamCountAggregateInputType = {
    id?: true;
    name?: true;
    fullName?: true;
    description?: true;
    icon?: true;
    href?: true;
    gradient?: true;
    color?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ExamAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamWhereInput;
    orderBy?: Prisma.ExamOrderByWithRelationInput | Prisma.ExamOrderByWithRelationInput[];
    cursor?: Prisma.ExamWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ExamCountAggregateInputType;
    _avg?: ExamAvgAggregateInputType;
    _sum?: ExamSumAggregateInputType;
    _min?: ExamMinAggregateInputType;
    _max?: ExamMaxAggregateInputType;
};
export type GetExamAggregateType<T extends ExamAggregateArgs> = {
    [P in keyof T & keyof AggregateExam]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExam[P]> : Prisma.GetScalarType<T[P], AggregateExam[P]>;
};
export type ExamGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamWhereInput;
    orderBy?: Prisma.ExamOrderByWithAggregationInput | Prisma.ExamOrderByWithAggregationInput[];
    by: Prisma.ExamScalarFieldEnum[] | Prisma.ExamScalarFieldEnum;
    having?: Prisma.ExamScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExamCountAggregateInputType | true;
    _avg?: ExamAvgAggregateInputType;
    _sum?: ExamSumAggregateInputType;
    _min?: ExamMinAggregateInputType;
    _max?: ExamMaxAggregateInputType;
};
export type ExamGroupByOutputType = {
    id: string;
    name: string;
    fullName: string;
    description: string | null;
    icon: string | null;
    href: string | null;
    gradient: string | null;
    color: string | null;
    sortOrder: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ExamCountAggregateOutputType | null;
    _avg: ExamAvgAggregateOutputType | null;
    _sum: ExamSumAggregateOutputType | null;
    _min: ExamMinAggregateOutputType | null;
    _max: ExamMaxAggregateOutputType | null;
};
export type GetExamGroupByPayload<T extends ExamGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExamGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExamGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExamGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExamGroupByOutputType[P]>;
}>>;
export type ExamWhereInput = {
    AND?: Prisma.ExamWhereInput | Prisma.ExamWhereInput[];
    OR?: Prisma.ExamWhereInput[];
    NOT?: Prisma.ExamWhereInput | Prisma.ExamWhereInput[];
    id?: Prisma.UuidFilter<"Exam"> | string;
    name?: Prisma.StringFilter<"Exam"> | string;
    fullName?: Prisma.StringFilter<"Exam"> | string;
    description?: Prisma.StringNullableFilter<"Exam"> | string | null;
    icon?: Prisma.StringNullableFilter<"Exam"> | string | null;
    href?: Prisma.StringNullableFilter<"Exam"> | string | null;
    gradient?: Prisma.StringNullableFilter<"Exam"> | string | null;
    color?: Prisma.StringNullableFilter<"Exam"> | string | null;
    sortOrder?: Prisma.IntFilter<"Exam"> | number;
    isActive?: Prisma.BoolFilter<"Exam"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Exam"> | Date | string;
};
export type ExamOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    icon?: Prisma.SortOrderInput | Prisma.SortOrder;
    href?: Prisma.SortOrderInput | Prisma.SortOrder;
    gradient?: Prisma.SortOrderInput | Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExamWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    AND?: Prisma.ExamWhereInput | Prisma.ExamWhereInput[];
    OR?: Prisma.ExamWhereInput[];
    NOT?: Prisma.ExamWhereInput | Prisma.ExamWhereInput[];
    fullName?: Prisma.StringFilter<"Exam"> | string;
    description?: Prisma.StringNullableFilter<"Exam"> | string | null;
    icon?: Prisma.StringNullableFilter<"Exam"> | string | null;
    href?: Prisma.StringNullableFilter<"Exam"> | string | null;
    gradient?: Prisma.StringNullableFilter<"Exam"> | string | null;
    color?: Prisma.StringNullableFilter<"Exam"> | string | null;
    sortOrder?: Prisma.IntFilter<"Exam"> | number;
    isActive?: Prisma.BoolFilter<"Exam"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Exam"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Exam"> | Date | string;
}, "id" | "name">;
export type ExamOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    icon?: Prisma.SortOrderInput | Prisma.SortOrder;
    href?: Prisma.SortOrderInput | Prisma.SortOrder;
    gradient?: Prisma.SortOrderInput | Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ExamCountOrderByAggregateInput;
    _avg?: Prisma.ExamAvgOrderByAggregateInput;
    _max?: Prisma.ExamMaxOrderByAggregateInput;
    _min?: Prisma.ExamMinOrderByAggregateInput;
    _sum?: Prisma.ExamSumOrderByAggregateInput;
};
export type ExamScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExamScalarWhereWithAggregatesInput | Prisma.ExamScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExamScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExamScalarWhereWithAggregatesInput | Prisma.ExamScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Exam"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Exam"> | string;
    fullName?: Prisma.StringWithAggregatesFilter<"Exam"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Exam"> | string | null;
    icon?: Prisma.StringNullableWithAggregatesFilter<"Exam"> | string | null;
    href?: Prisma.StringNullableWithAggregatesFilter<"Exam"> | string | null;
    gradient?: Prisma.StringNullableWithAggregatesFilter<"Exam"> | string | null;
    color?: Prisma.StringNullableWithAggregatesFilter<"Exam"> | string | null;
    sortOrder?: Prisma.IntWithAggregatesFilter<"Exam"> | number;
    isActive?: Prisma.BoolWithAggregatesFilter<"Exam"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Exam"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Exam"> | Date | string;
};
export type ExamCreateInput = {
    id?: string;
    name: string;
    fullName: string;
    description?: string | null;
    icon?: string | null;
    href?: string | null;
    gradient?: string | null;
    color?: string | null;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExamUncheckedCreateInput = {
    id?: string;
    name: string;
    fullName: string;
    description?: string | null;
    icon?: string | null;
    href?: string | null;
    gradient?: string | null;
    color?: string | null;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExamUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    href?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gradient?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    href?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gradient?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamCreateManyInput = {
    id?: string;
    name: string;
    fullName: string;
    description?: string | null;
    icon?: string | null;
    href?: string | null;
    gradient?: string | null;
    color?: string | null;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ExamUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    href?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gradient?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    icon?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    href?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gradient?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExamCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    icon?: Prisma.SortOrder;
    href?: Prisma.SortOrder;
    gradient?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExamAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type ExamMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    icon?: Prisma.SortOrder;
    href?: Prisma.SortOrder;
    gradient?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExamMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    icon?: Prisma.SortOrder;
    href?: Prisma.SortOrder;
    gradient?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ExamSumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type ExamSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    fullName?: boolean;
    description?: boolean;
    icon?: boolean;
    href?: boolean;
    gradient?: boolean;
    color?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["exam"]>;
export type ExamSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    fullName?: boolean;
    description?: boolean;
    icon?: boolean;
    href?: boolean;
    gradient?: boolean;
    color?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["exam"]>;
export type ExamSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    fullName?: boolean;
    description?: boolean;
    icon?: boolean;
    href?: boolean;
    gradient?: boolean;
    color?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["exam"]>;
export type ExamSelectScalar = {
    id?: boolean;
    name?: boolean;
    fullName?: boolean;
    description?: boolean;
    icon?: boolean;
    href?: boolean;
    gradient?: boolean;
    color?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ExamOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "fullName" | "description" | "icon" | "href" | "gradient" | "color" | "sortOrder" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["exam"]>;
export type $ExamPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Exam";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        fullName: string;
        description: string | null;
        icon: string | null;
        href: string | null;
        gradient: string | null;
        color: string | null;
        sortOrder: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["exam"]>;
    composites: {};
};
export type ExamGetPayload<S extends boolean | null | undefined | ExamDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExamPayload, S>;
export type ExamCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExamCountAggregateInputType | true;
};
export interface ExamDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Exam'];
        meta: {
            name: 'Exam';
        };
    };
    findUnique<T extends ExamFindUniqueArgs>(args: Prisma.SelectSubset<T, ExamFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ExamFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExamFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ExamFindFirstArgs>(args?: Prisma.SelectSubset<T, ExamFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ExamFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExamFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ExamFindManyArgs>(args?: Prisma.SelectSubset<T, ExamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ExamCreateArgs>(args: Prisma.SelectSubset<T, ExamCreateArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ExamCreateManyArgs>(args?: Prisma.SelectSubset<T, ExamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ExamCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ExamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ExamDeleteArgs>(args: Prisma.SelectSubset<T, ExamDeleteArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ExamUpdateArgs>(args: Prisma.SelectSubset<T, ExamUpdateArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ExamDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ExamUpdateManyArgs>(args: Prisma.SelectSubset<T, ExamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ExamUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ExamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ExamUpsertArgs>(args: Prisma.SelectSubset<T, ExamUpsertArgs<ExtArgs>>): Prisma.Prisma__ExamClient<runtime.Types.Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ExamCountArgs>(args?: Prisma.Subset<T, ExamCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExamCountAggregateOutputType> : number>;
    aggregate<T extends ExamAggregateArgs>(args: Prisma.Subset<T, ExamAggregateArgs>): Prisma.PrismaPromise<GetExamAggregateType<T>>;
    groupBy<T extends ExamGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExamGroupByArgs['orderBy'];
    } : {
        orderBy?: ExamGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ExamFieldRefs;
}
export interface Prisma__ExamClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ExamFieldRefs {
    readonly id: Prisma.FieldRef<"Exam", 'String'>;
    readonly name: Prisma.FieldRef<"Exam", 'String'>;
    readonly fullName: Prisma.FieldRef<"Exam", 'String'>;
    readonly description: Prisma.FieldRef<"Exam", 'String'>;
    readonly icon: Prisma.FieldRef<"Exam", 'String'>;
    readonly href: Prisma.FieldRef<"Exam", 'String'>;
    readonly gradient: Prisma.FieldRef<"Exam", 'String'>;
    readonly color: Prisma.FieldRef<"Exam", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"Exam", 'Int'>;
    readonly isActive: Prisma.FieldRef<"Exam", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Exam", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Exam", 'DateTime'>;
}
export type ExamFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    where: Prisma.ExamWhereUniqueInput;
};
export type ExamFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    where: Prisma.ExamWhereUniqueInput;
};
export type ExamFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    where?: Prisma.ExamWhereInput;
    orderBy?: Prisma.ExamOrderByWithRelationInput | Prisma.ExamOrderByWithRelationInput[];
    cursor?: Prisma.ExamWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExamScalarFieldEnum | Prisma.ExamScalarFieldEnum[];
};
export type ExamFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    where?: Prisma.ExamWhereInput;
    orderBy?: Prisma.ExamOrderByWithRelationInput | Prisma.ExamOrderByWithRelationInput[];
    cursor?: Prisma.ExamWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExamScalarFieldEnum | Prisma.ExamScalarFieldEnum[];
};
export type ExamFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    where?: Prisma.ExamWhereInput;
    orderBy?: Prisma.ExamOrderByWithRelationInput | Prisma.ExamOrderByWithRelationInput[];
    cursor?: Prisma.ExamWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExamScalarFieldEnum | Prisma.ExamScalarFieldEnum[];
};
export type ExamCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExamCreateInput, Prisma.ExamUncheckedCreateInput>;
};
export type ExamCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ExamCreateManyInput | Prisma.ExamCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExamCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    data: Prisma.ExamCreateManyInput | Prisma.ExamCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExamUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExamUpdateInput, Prisma.ExamUncheckedUpdateInput>;
    where: Prisma.ExamWhereUniqueInput;
};
export type ExamUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ExamUpdateManyMutationInput, Prisma.ExamUncheckedUpdateManyInput>;
    where?: Prisma.ExamWhereInput;
    limit?: number;
};
export type ExamUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExamUpdateManyMutationInput, Prisma.ExamUncheckedUpdateManyInput>;
    where?: Prisma.ExamWhereInput;
    limit?: number;
};
export type ExamUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    where: Prisma.ExamWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExamCreateInput, Prisma.ExamUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ExamUpdateInput, Prisma.ExamUncheckedUpdateInput>;
};
export type ExamDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
    where: Prisma.ExamWhereUniqueInput;
};
export type ExamDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExamWhereInput;
    limit?: number;
};
export type ExamDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExamSelect<ExtArgs> | null;
    omit?: Prisma.ExamOmit<ExtArgs> | null;
};
