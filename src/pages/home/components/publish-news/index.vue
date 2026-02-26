<script setup lang="ts">
import { ref, reactive } from 'vue'
import { createNews, type CreateNewsParams } from '@/api/news'
import { ElMessage } from 'element-plus'

defineOptions({ name: 'PublishNews' })

const loading = ref(false)

const form = reactive<CreateNewsParams>({
  title: '',
  content: '',
  sourceUrl: '',
  tags: undefined,
  images: undefined,
  summary: '',
  viewpoints: undefined,
  score: undefined,
  publishTime: new Date()
})

const rules = {
  title: [
    { required: true, message: '请输入标题', trigger: 'blur' }
  ],
  publishTime: [
    { required: true, message: '请选择发布时间', trigger: 'change' }
  ]
}

const formRef = ref()

async function handleSubmit() {
  if (!formRef.value) return
  
  await formRef.value.validate(async (valid) => {
    if (valid) {
      loading.value = true
      try {
        const res = await createNews({
          ...form,
          publishTime: form.publishTime
        })
        
        if (res.code === 200) {
          ElMessage.success('发布成功')
          console.log('成功发布:', res.data)
          formRef.value.resetFields()
        } else {
          ElMessage.error(res.msg || '发布失败')
        }
      } catch (error) {
        ElMessage.error('发布失败，请稍后重试')
        console.error('发布新闻失败:', error)
      } finally {
        loading.value = false
      }
    }
  })
}

function handleReset() {
  formRef.value?.resetFields()
}
</script>

<template>
  <div class="publish-news">
    <div class="publish-header">
      <h2>发布新闻</h2>
    </div>
    
    <div class="publish-form">
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="120px"
      >
        <el-form-item label="标题" prop="title">
          <el-input 
            v-model="form.title" 
            placeholder="请输入新闻标题"
            maxlength="100"
            show-word-limit
          />
        </el-form-item>
        
        <el-form-item label="发布时间" prop="publishTime">
          <el-date-picker
            v-model="form.publishTime"
            type="datetime"
            placeholder="选择发布时间"
            value-format="YYYY-MM-DD HH:mm:ss"
          />
        </el-form-item>
        
        <el-form-item label="摘要">
          <el-input
            v-model="form.summary"
            type="textarea"
            :rows="3"
            placeholder="请输入新闻摘要"
            maxlength="500"
            show-word-limit
          />
        </el-form-item>
        
        <el-form-item label="内容">
          <el-input
            v-model="form.content"
            type="textarea"
            :rows="10"
            placeholder="请输入新闻内容"
          />
        </el-form-item>
        
        <el-form-item label="来源URL">
          <el-input
            v-model="form.sourceUrl"
            placeholder="请输入来源URL"
          />
        </el-form-item>
        
        <el-form-item label="评分">
          <el-input-number
            v-model="form.score"
            :min="0"
            :max="100"
            placeholder="请输入评分0-100"
          />
        </el-form-item>
        
        <el-form-item>
          <el-button 
            type="primary" 
            :loading="loading"
            @click="handleSubmit"
          >
            发布
          </el-button>
          <el-button @click="handleReset">
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="less">
.publish-news {
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  min-height: 100%;
  
  .publish-header {
    margin-bottom: 24px;
    
    h2 {
      font-size: 20px;
      font-weight: 600;
      color: #303133;
    }
  }
  
  .publish-form {
    max-width: 800px;
  }
}
</style>