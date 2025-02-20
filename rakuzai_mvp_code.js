
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectItem } from '@/components/ui/select';
import { useForm } from 'react-hook-form';

const categories = ['建具', '階段', '窓', '床', '設備機器', '金属', '鉄', '部品', 'その他'];

export default function RakuzaiMVP() {
  const { register, handleSubmit } = useForm();
  const [items, setItems] = useState([]);

  const onSubmit = (data) => {
    setItems([...items, data]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">ラクザイ - 建築資材マッチングアプリ</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
        <Card className="mb-4">
          <CardContent>
            <Input
              placeholder="資材名"
              {...register('name', { required: true })}
              className="mb-2"
            />
            <Input
              placeholder="価格 (円)"
              type="number"
              {...register('price', { required: true })}
              className="mb-2"
            />
            <Select {...register('category')} className="mb-2">
              {categories.map((category, index) => (
                <SelectItem key={index} value={category}>
                  {category}
                </SelectItem>
              ))}
            </Select>
            <Input
              placeholder="CO2削減量 (kg)"
              type="number"
              {...register('co2_reduction')}
              className="mb-2"
            />
            <Button type="submit">出品する</Button>
          </CardContent>
        </Card>
      </form>

      <div>
        <h2 className="text-xl font-semibold mb-2">出品一覧</h2>
        {items.map((item, index) => (
          <Card key={index} className="mb-2">
            <CardContent>
              <p>資材名: {item.name}</p>
              <p>価格: {item.price} 円</p>
              <p>カテゴリ: {item.category}</p>
              <p>CO2削減量: {item.co2_reduction} kg</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
